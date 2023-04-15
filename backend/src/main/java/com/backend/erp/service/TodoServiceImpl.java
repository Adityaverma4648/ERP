package com.backend.erp.service;

import com.backend.erp.config.JwtService;
import com.backend.erp.model.Todo;
import com.backend.erp.model.TodoStatus;
import com.backend.erp.repository.TodoRepository;
import com.backend.erp.repository.UserRepository;
import com.backend.erp.request.TodoRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.TodoResponse;
import com.backend.erp.utility.UtilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;

    private final UserRepository userRepository;

    private final JwtService jwtService;

    private final UtilityService utilityService;

    public TodoResponse fetch(String authToken) {
        var username= utilityService.extract(authToken);
        var user = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));
        var todos = todoRepository.findByUserId(user.getId()).orElseThrow(() -> new ExpressionException("No todos belong to " + user.getName()));

        return TodoResponse.builder().todos(todos).build();
    }

    public SuccessResponse add(TodoRequest request, String authToken) {
        var username= utilityService.extract(authToken);
        var user = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));

        var todo = Todo.builder().user(user).title(request.getTitle()).description(request.getDesc()).targetTime(request.getTargetTime()).status(TodoStatus.PENDING).isCompleted(request.getIsCompleted()).build();
        todoRepository.save(todo);
        return SuccessResponse.builder().statusCode(200).statusMessage("Added successfully").build();

    }

    public SuccessResponse delete(Integer id, String authToken) {
        var username= utilityService.extract(authToken);
        var user = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));
        var todo = todoRepository.findById(id).orElseThrow(() -> new ExpressionException("No todos belong to " + user.getName()));
        if (user.getId() == todo.getUser().getId()) {
            todoRepository.deleteById(id);
        } else {
            return SuccessResponse.builder().statusCode(401).statusMessage("User unauthorized").build();
        }
        return SuccessResponse.builder().statusCode(200).statusMessage("Deleted successfully").build();
    }

    public SuccessResponse update(TodoRequest request, String authToken, Integer id) {
        var username= utilityService.extract(authToken);
        var user = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));
        var todo = todoRepository.findById(id).orElseThrow(() -> new ExpressionException("No todos belong to " + user.getName()));

        if (user.getId() == todo.getUser().getId()) {
            if (request.getTitle()!=null) {
                todo.setTitle(request.getTitle());
            }
            if (request.getDesc()!=null) {
                todo.setDescription(request.getDesc());
            }
            if (request.getTargetTime()!=null && request.getTargetTime()!=todo.getTargetTime()) {
                todo.setTargetTime(request.getTargetTime());
            }
            todo.setCompleted(request.getIsCompleted());
            todoRepository.save(todo);
        } else {
            return SuccessResponse.builder().statusCode(401).statusMessage("User unauthorized").build();
        }
        return SuccessResponse.builder().statusCode(200).statusMessage("Updated successfully").build();
    }
}
