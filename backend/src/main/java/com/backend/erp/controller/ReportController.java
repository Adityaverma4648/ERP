package com.backend.erp.controller;


import com.backend.erp.request.ReportRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.TaskResponse;
import com.backend.erp.service.ReportServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/report")
@RequiredArgsConstructor
public class ReportController {

    private final ReportServiceImpl service;


    @PostMapping("/submit")
    public ResponseEntity<SuccessResponse> submit(@RequestBody ReportRequest request, @RequestHeader(value = "Authorization") String authToken) {
        return ResponseEntity.ok(service.submit(request, authToken));
    }

}
