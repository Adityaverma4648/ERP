package com.backend.erp.controller;

import com.backend.erp.request.TodoRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.TodoResponse;
import com.backend.erp.service.TodoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    private TodoServiceImpl service;

    @GetMapping("/")
    public ResponseEntity<TodoResponse> fetchTodos(@RequestHeader(value = "Authorization") String authToken) {
        return ResponseEntity.ok(service.fetch(authToken));
    }

    @PostMapping("/add")
    public ResponseEntity<SuccessResponse> addTodo(@RequestBody TodoRequest request, @RequestHeader(value = "Authorization") String authToken) {
        return ResponseEntity.ok(service.add(request, authToken));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<SuccessResponse> deleteTodos(@RequestParam int id, @RequestHeader(value = "Authorization") String authToken) {
        return ResponseEntity.ok(service.delete(id, authToken));
    }

}