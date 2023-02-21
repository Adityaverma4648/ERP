package com.backend.erp.service;

import com.backend.erp.request.AuthenticationRequest;
import com.backend.erp.request.TodoRequest;
import com.backend.erp.response.AuthenticationResponse;
import com.backend.erp.request.RegisterRequest;
import com.backend.erp.config.JwtService;
import com.backend.erp.repository.UserRepository;
import com.backend.erp.model.Role;
import com.backend.erp.model.User;
import com.backend.erp.response.TokenRequest;
import com.backend.erp.response.UserDataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements  AuthenticationService{

    private final UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var userExist = userRepository.findByEmail(request.getEmail());
        if (userExist.isPresent()) {
            return AuthenticationResponse.builder()
                    .message("User with this email already exist")
                    .build();
        }
        var user = User.builder()
                .username(request.getUsername())
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .message("success")
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .message("success")
                .build();
    }

    public UserDataResponse fetch(TokenRequest request,String authToken) {
        authToken = authToken.substring(7);
        var username = jwtService.extractUsername(authToken);
        var user = userRepository.findByUsername(username).orElseThrow();

            return UserDataResponse.builder()
                    .id(user.getId())
                    .username(user.getUsername())
                    .name(user.getName())
                    .email(user.getEmail())
                    .build();
    }
}
