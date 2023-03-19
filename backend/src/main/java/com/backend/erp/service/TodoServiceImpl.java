package com.backend.erp.service;

import com.backend.erp.config.JwtService;
import com.backend.erp.model.Todo;
import com.backend.erp.repository.TodoRepository;
import com.backend.erp.repository.UserRepository;
import com.backend.erp.request.TodoRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.TodoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;

    private final UserRepository userRepository;

    private final JwtService jwtService;


    public TodoResponse fetch(String authToken) {
        authToken = authToken.substring(7);
        var username = jwtService.extractUsername(authToken);
        var user = userRepository.findByUsername(username).orElseThrow();
        var todos = todoRepository.findByUserId(user.getId()).orElseThrow();

        return TodoResponse.builder()
                .todos(todos)
                .build();

    }

    public SuccessResponse add(TodoRequest request, String authToken) {
        authToken = authToken.substring(7);
        var username = jwtService.extractUsername(authToken);
        var user = userRepository.findByUsername(username).orElseThrow();

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

    public SuccessResponse delete(Integer id, String authToken) {
        authToken = authToken.substring(7);
        var username = jwtService.extractUsername(authToken);
        var user = userRepository.findByUsername(username).orElseThrow();
        var todo = todoRepository.findById(id).orElseThrow();
        if (user.getId()== todo.getUser().getId()) {
            todoRepository.deleteById(id);
        }else{
            return SuccessResponse.builder()
                    .message("id = "+id+"user id = "+user.getId())
                    .build();
        }
        return SuccessResponse.builder()
                .message("Deleted successfully")
                .build();
    }
}
