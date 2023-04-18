package com.backend.erp.service;

import com.backend.erp.model.ProjectUserList;
import com.backend.erp.request.ProjectRequest;
import com.backend.erp.request.TaskRequest;
import com.backend.erp.response.ProjectResponse;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.TaskResponse;
import com.backend.erp.response.UserProjectResponse;

public interface ProjectService {
    public SuccessResponse create(ProjectRequest request, String authToken);

    public ProjectResponse fetchProject(String authToken);

    public UserProjectResponse fetchUser(String authToken, Integer id);

    public SuccessResponse addUser(String authToken,Integer id,String user);


    public SuccessResponse assign(TaskRequest request, String authToken, Integer id);

    public SuccessResponse remove(String authToken, Integer id);

    public SuccessResponse update(TaskRequest request, String authToken, Integer id);

    public TaskResponse fetch(String authToken);

}
