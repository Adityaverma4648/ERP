package com.backend.erp.controller;

import com.backend.erp.request.TodoRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.service.TodoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    private TodoServiceImpl service;

    @PostMapping("/add")
    public ResponseEntity<SuccessResponse> register(@RequestBody TodoRequest request,@RequestHeader(value="Authorization") String authToken) {
        return ResponseEntity.ok(service.add(request,authToken));
    }

}
