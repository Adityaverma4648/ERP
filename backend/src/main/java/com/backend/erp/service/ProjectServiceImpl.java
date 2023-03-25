package com.backend.erp.service;

import com.backend.erp.config.JwtService;
import com.backend.erp.model.Project;
import com.backend.erp.model.ProjectTask;
import com.backend.erp.model.TaskStatus;
import com.backend.erp.repository.ProjectRepository;
import com.backend.erp.repository.TaskRepository;
import com.backend.erp.repository.UserRepository;
import com.backend.erp.request.ProjectRequest;
import com.backend.erp.request.TaskRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.utility.UtilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final UserRepository userRepository;

    private final ProjectRepository projectRepository;

    private final TaskRepository taskRepository;

    private final JwtService jwtService;

    private final UtilityService utilityService;

    public SuccessResponse create(ProjectRequest request, String authToken) {
        var username = utilityService.extract(authToken);
        var user = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));

        var project = Project.builder().projectName(request.getProjectName()).description(request.getDescription()).user(user).createdAt(new Date()).build();
        projectRepository.save(project);
        return SuccessResponse.builder().statusCode(200).statusMessage("Project created successfully").build();
    }

    public SuccessResponse addTask(TaskRequest request, String authToken) {
        var admin = utilityService.extract(authToken);
        var user = userRepository.findByUsername(request.getUsername()).orElseThrow(() -> new ExpressionException("No user Found"));

        var task = ProjectTask.builder().user(user).title(request.getTitle()).description(request.getDescription()).assignedOn(new Date()).targetTime(request.getTargetTime()).isCompleted(false).status(TaskStatus.WORKING).build();
        taskRepository.save(task);
        return SuccessResponse.builder().statusCode(200).statusMessage("Task assigned successfully").build();
    }
}
