package com.backend.erp.controller;

import com.backend.erp.request.AuthenticationRequest;
import com.backend.erp.request.UpdateUser;
import com.backend.erp.response.AuthenticationResponse;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.UserDataResponse;
import com.backend.erp.service.AuthenticationServiceImpl;
import com.backend.erp.request.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationServiceImpl service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(service.register(request));
    }

    @GetMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/fetch")
    public ResponseEntity<UserDataResponse> register(@RequestHeader(value="Authorization") String authToken) {
        return ResponseEntity.ok(service.fetch(authToken));
    }

    @PutMapping("/update")
    public ResponseEntity<SuccessResponse> update(@RequestBody UpdateUser request, @RequestHeader(value="Authorization") String authToken) {
        return ResponseEntity.ok(service.update(request,authToken));
    }
}
