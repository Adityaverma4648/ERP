package com.backend.erp.controller;

import com.backend.erp.request.ProjectRequest;
import com.backend.erp.request.TaskRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.TaskResponse;
import com.backend.erp.service.ProjectServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/project")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectServiceImpl service;

    @PostMapping("/create")
    public ResponseEntity<SuccessResponse> create(@RequestBody ProjectRequest request, @RequestHeader(value = "Authorization") String authToken) {
        return ResponseEntity.ok(service.create(request, authToken));
    }

    @PostMapping("/assign")
    public ResponseEntity<SuccessResponse> assign(@RequestBody TaskRequest request, @RequestHeader(value = "Authorization") String authToken, @RequestParam Integer id) {
        return ResponseEntity.ok(service.assign(request, authToken, id));
    }

    @GetMapping("/remove/{id}")
    public ResponseEntity<SuccessResponse> remove(@RequestHeader(value = "Authorization") String authToken, @PathVariable Integer id) {
        return ResponseEntity.ok(service.remove(authToken, id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<SuccessResponse> update(@RequestBody TaskRequest request, @RequestHeader(value = "Authorization") String authToken, @PathVariable Integer id) {
        return ResponseEntity.ok(service.update(request, authToken, id));
    }

    @GetMapping("/fetch")
    public ResponseEntity<TaskResponse> fetch(@RequestHeader(value = "Authorization") String authToken) {
        return ResponseEntity.ok(service.fetch(authToken));
    }

}
