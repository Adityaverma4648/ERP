package com.backend.erp.service;

import com.backend.erp.request.AuthenticationRequest;
import com.backend.erp.request.RegisterRequest;
import com.backend.erp.request.UpdateUser;
import com.backend.erp.response.AuthenticationResponse;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.UserDataResponse;

public interface AuthenticationService {
    public AuthenticationResponse register(RegisterRequest request);

    public AuthenticationResponse authenticate(AuthenticationRequest request);

    public UserDataResponse fetch(String authToken);

    public SuccessResponse update(UpdateUser request, String authToken);
    }
