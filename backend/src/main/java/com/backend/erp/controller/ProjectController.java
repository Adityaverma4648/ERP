package com.backend.erp.controller;

import com.backend.erp.request.ProjectRequest;
import com.backend.erp.request.TaskRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.service.ProjectServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/project")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectServiceImpl service;

    @PostMapping("/create")
    public ResponseEntity<SuccessResponse> create(@RequestBody ProjectRequest request, @RequestHeader(value = "Authorization") String authToken) {
        return ResponseEntity.ok(service.create(request, authToken));
    }

    @PostMapping("/add")
    public ResponseEntity<SuccessResponse> add(@RequestBody TaskRequest request, @RequestHeader(value = "Authorization") String authToken) {
        return ResponseEntity.ok(service.addTask(request, authToken));
    }
}
