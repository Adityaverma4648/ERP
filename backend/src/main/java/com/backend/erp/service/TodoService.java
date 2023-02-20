package com.backend.erp.service;

import com.backend.erp.request.TodoRequest;
import com.backend.erp.response.SuccessResponse;

public interface TodoService {
    public SuccessResponse add(TodoRequest request, String authToken);
}
