package com.backend.erp.service;

import com.backend.erp.model.Todo;
import com.backend.erp.repository.TodoRepository;
import com.backend.erp.request.TodoRequest;
import com.backend.erp.response.SuccessResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;
    public SuccessResponse add(TodoRequest request) {
        var todo = Todo.builder()
                .user(request.getUserId())
                .status(request.getStatus())
                .task(request.getTask())
                .build();
        todoRepository.save(todo);
        return SuccessResponse.builder()
                .message("Added")
                .build();

    }
}
