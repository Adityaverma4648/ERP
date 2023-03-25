package com.backend.erp.utility;

import com.backend.erp.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UtilityServiceImpl implements UtilityService {

    private final JwtService jwtService;

    public String extract(String authToken){
        authToken = authToken.substring(7);
        var username = jwtService.extractUsername(authToken);
        return username;
    }



}
