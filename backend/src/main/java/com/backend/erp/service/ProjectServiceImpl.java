package com.backend.erp.service;

import com.backend.erp.model.*;
import com.backend.erp.repository.ProjectRepository;
import com.backend.erp.repository.ProjectUserListRepository;
import com.backend.erp.repository.TaskRepository;
import com.backend.erp.repository.UserRepository;
import com.backend.erp.request.ProjectRequest;
import com.backend.erp.request.TaskRequest;
import com.backend.erp.response.ProjectResponse;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.response.TaskResponse;
import com.backend.erp.response.UserProjectResponse;
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


    private final ProjectUserListRepository projectUserListRepository;

    private final TaskRepository taskRepository;

    private final UtilityService utilityService;

    public SuccessResponse create(ProjectRequest request, String authToken) {
        var username = utilityService.extract(authToken);
        var user = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));

        var project = Project.builder().projectName(request.getProjectName()).description(request.getDescription()).user(user).createdAt(new Date()).build();
        projectRepository.save(project);
        return SuccessResponse.builder().statusCode(200).statusMessage("Project created successfully").build();
    }

    public ProjectResponse fetchProject(String authToken) {
        var username = utilityService.extract(authToken);
        var user = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));

        var project = projectRepository.findAll();
        return ProjectResponse.builder().projects(project).build();
    }

    public UserProjectResponse fetchUser(String authToken, Integer id) {
        var username = utilityService.extract(authToken);
        var admin = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));
            var user = projectUserListRepository.findByProjectId(id).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));
            return UserProjectResponse.builder().users(user).build();
        }


    public SuccessResponse addUser(String authToken, Integer id, String user) {
        var username = utilityService.extract(authToken);
        var admin = userRepository.findByUsername(username).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));

        if (admin.getRole() == Role.ADMIN) {
            var user1 = userRepository.findByUsername(user).orElseThrow(() -> new ExpressionException("No user Found with these credentials"));
            var project = projectRepository.findById(id).orElseThrow(() -> new ExpressionException("Project doesn't exist"));
            var projectList = ProjectUserList.builder().user(user1).project(project).build();
            projectUserListRepository.save(projectList);
            return SuccessResponse.builder().statusCode(200).statusMessage("User added successfully").build();
        }
        return SuccessResponse.builder().statusCode(403).statusMessage("No auth Permission").build();
    }

    public SuccessResponse assign(TaskRequest request, String authToken, Integer id) {
        var adminId = utilityService.extract(authToken);
        var admin = userRepository.findByUsername(adminId).orElseThrow(() -> new ExpressionException("No user Found"));
        if (admin.getRole() != Role.ADMIN) {
            return SuccessResponse.builder().statusCode(404).statusMessage("Doesn't have admin permission").build();
        }

        var user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new ExpressionException("No user Found"));
        var project = projectRepository.findById(id).orElseThrow(() -> new ExpressionException("Project doesn't exist"));

        var task = ProjectTask.builder().user(user).project(project).title(request.getTitle()).description(request.getDescription()).assignedOn(new Date()).targetTime(request.getTargetTime()).isCompleted(false).status(TaskStatus.WORKING).build();
        taskRepository.save(task);
        return SuccessResponse.builder().statusCode(200).statusMessage("Task assigned successfully").build();
    }

    public SuccessResponse remove(String authToken, Integer id) {
        var adminId = utilityService.extract(authToken);
        var admin = userRepository.findByUsername(adminId).orElseThrow(() -> new ExpressionException("No user Found"));
        if (admin.getRole() != Role.ADMIN) {
            return SuccessResponse.builder().statusCode(404).statusMessage("Doesn't have admin permission").build();
        }

        taskRepository.deleteById(id);
        return SuccessResponse.builder().statusCode(200).statusMessage("Task successfully removed").build();
    }

    public SuccessResponse update(TaskRequest request, String authToken, Integer id) {
        var adminId = utilityService.extract(authToken);
        var admin = userRepository.findByUsername(adminId).orElseThrow(() -> new ExpressionException("No user Found"));
        if (admin.getRole() != Role.ADMIN) {
            return SuccessResponse.builder().statusCode(404).statusMessage("Doesn't have admin permission").build();
        }

        var task = taskRepository.findById(id).orElseThrow(() -> new ExpressionException("No such task exist"));
        if (request.getEmail() != null) {
            var user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new ExpressionException("No user Found"));
            task.setUser(user);
        }
        if (request.getTitle() != null) {
            task.setTitle(request.getTitle());
        }
        if (request.getDescription() != null) {
            task.setDescription(request.getDescription());
        }
        if (request.getTargetTime() != null && request.getTargetTime() != task.getTargetTime()) {
            task.setTargetTime(request.getTargetTime());
        }
        taskRepository.save(task);
        return SuccessResponse.builder().statusCode(200).statusMessage("Task successfully updated").build();
    }

    public TaskResponse fetch(String authToken) {
        var userId = utilityService.extract(authToken);
        var user = userRepository.findByUsername(userId).orElseThrow(() -> new ExpressionException("No user Found"));
        if (user.getRole() == Role.ADMIN) {
            var project = taskRepository.findAll();
            return TaskResponse.builder().task(project).build();
        }
        var project = taskRepository.findByUserId(user.getId()).orElseThrow(() -> new ExpressionException("No task Found"));
        ;
        return TaskResponse.builder().task(project).build();
    }
}
