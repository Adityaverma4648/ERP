package com.backend.erp.service;

import com.backend.erp.request.ProjectRequest;
import com.backend.erp.request.TaskRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.TaskResponse;

public interface ProjectService {
    public SuccessResponse create(ProjectRequest request, String authToken);

    public SuccessResponse assign(TaskRequest request, String authToken, Integer id);

    public SuccessResponse remove(String authToken, Integer id);

    public SuccessResponse update(TaskRequest request, String authToken, Integer id);

    public TaskResponse fetch(String authToken);

}
