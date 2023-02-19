package com.backend.erp.service;

import com.backend.erp.config.JwtService;
import com.backend.erp.model.Todo;
import com.backend.erp.model.User;
import com.backend.erp.repository.TodoRepository;
import com.backend.erp.repository.UserRepository;
import com.backend.erp.request.TodoRequest;
import com.backend.erp.response.SuccessResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;

    private final UserRepository userRepository;

    private final JwtService jwtService;

    public SuccessResponse add(TodoRequest request) {
        var username = jwtService.extractUsername(request.getToken());
        var user = userRepository.findByEmail(username).orElseThrow();


        var todo = Todo.builder()
                .user(user)
                .status(request.getStatus())
                .task(request.getTask())
                .build();
        todoRepository.save(todo);
        return SuccessResponse.builder()
                .message("Added")
                .build();

    }
}
