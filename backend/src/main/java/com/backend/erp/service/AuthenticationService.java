package com.backend.erp.service;

import com.backend.erp.request.AuthenticationRequest;
import com.backend.erp.request.RegisterRequest;
import com.backend.erp.response.AuthenticationResponse;

public interface AuthenticationService {
    public AuthenticationResponse register(RegisterRequest request);

    public AuthenticationResponse authenticate(AuthenticationRequest request);

}
