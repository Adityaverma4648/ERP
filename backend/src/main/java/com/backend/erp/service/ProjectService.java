package com.backend.erp.service;

import com.backend.erp.request.ProjectRequest;
import com.backend.erp.request.TaskRequest;
import com.backend.erp.response.SuccessResponse;

public interface ProjectService {
    public SuccessResponse create(ProjectRequest request, String authToken);

    public SuccessResponse addTask(TaskRequest request, String authToken);

}
