package com.backend.erp.service;

import com.backend.erp.request.AuthenticationRequest;
import com.backend.erp.request.RegisterRequest;
import com.backend.erp.request.TodoRequest;
import com.backend.erp.response.AuthenticationResponse;
import com.backend.erp.response.TokenRequest;
import com.backend.erp.response.UserDataResponse;

public interface AuthenticationService {
    public AuthenticationResponse register(RegisterRequest request);

    public AuthenticationResponse authenticate(AuthenticationRequest request);

    public UserDataResponse fetch(TokenRequest request);
    }
