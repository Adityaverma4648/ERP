package com.backend.erp.service;

import com.backend.erp.request.TodoRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.TodoResponse;

public interface TodoService {

    public TodoResponse fetch(String authToken);

    public SuccessResponse add(TodoRequest request, String authToken);

    public SuccessResponse delete(Integer id, String authToken);

    public SuccessResponse update(TodoRequest request, String authToken,Integer id);


}
