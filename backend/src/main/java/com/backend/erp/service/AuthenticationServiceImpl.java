package com.backend.erp.service;

import com.backend.erp.model.AvatarUrl;
import com.backend.erp.request.AuthenticationRequest;
import com.backend.erp.request.UpdateUser;
import com.backend.erp.response.AuthenticationResponse;
import com.backend.erp.request.RegisterRequest;
import com.backend.erp.config.JwtService;
import com.backend.erp.repository.UserRepository;
import com.backend.erp.model.Role;
import com.backend.erp.model.User;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.UserDataResponse;
import com.backend.erp.utility.UtilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    private final UtilityService utilityService;


    public AuthenticationResponse signup(RegisterRequest request) {
        var userExist = userRepository.findByEmail(request.getEmail());
        if (userExist.isPresent()) {
            return AuthenticationResponse.builder().message("User with this email already exist").build();
        }
        userExist = userRepository.findByUsername(request.getUsername());
        if (userExist.isPresent()) {
            return AuthenticationResponse.builder().message("User with this username already exist").build();
        }
        var user = User.builder().username(request.getUsername()).name(request.getName()).email(request.getEmail()).password(passwordEncoder.encode(request.getPassword())).role(Role.USER).date(new Date()).avatar(AvatarUrl.USER_1).build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).message("success").build();
    }

    public AuthenticationResponse login(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new ExpressionException("No user found"));
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).message("success").build();
    }

    public UserDataResponse fetch(String authToken) {
        var username= utilityService.extract(authToken);
        var user = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user found"));

        return UserDataResponse.builder().id(user.getId()).username(user.getUsername()).name(user.getName()).email(user.getEmail()).build();
    }

    public SuccessResponse update(UpdateUser request, String authToken) {
        authToken = authToken.substring(7);
        var username = jwtService.extractUsername(authToken);
        var user = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user found"));
        if (request.getUsername()!=null) {
            user.setUsername(request.getUsername());
        }
        if (request.getName()!=null) {
            user.setName(request.getName());
        }
        if (request.getEmail()!=null) {
            user.setEmail(request.getEmail());
        }
        if (request.getAvatar()!=null &&  !request.getAvatar().equals(user.getAvatar())) {
            user.setAvatar(request.getAvatar());
        }
        userRepository.save(user);

        return SuccessResponse.builder().statusCode(200).statusMessage("Updated successfully").build();
    }
}
