package com.backend.erp.service;


import com.backend.erp.model.TaskReport;
import com.backend.erp.model.TaskStatus;
import com.backend.erp.repository.ReportRepository;
import com.backend.erp.repository.TaskRepository;
import com.backend.erp.repository.UserRepository;
import com.backend.erp.request.ReportRequest;
import com.backend.erp.response.SuccessResponse;
import com.backend.erp.utility.UtilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {

    private final ReportRepository reportRepository;

    private final UserRepository userRepository;

    private final TaskRepository taskRepository;

    private final UtilityService utilityService;


    public SuccessResponse submit(ReportRequest request, String authToken) {
        var userId = utilityService.extract(authToken);
        var user = userRepository.findByUsername(userId).orElseThrow(() -> new ExpressionException("No user Found"));

        var task = taskRepository.findById(request.getTaskId()).orElseThrow(() -> new ExpressionException("Task doesn't exist"));
        var report = TaskReport.builder().user(user).task(task).report(request.getReport()).completedTime(new Date()).build();

        task.setCompleted(true);
        if (report.getCompletedTime().before(task.getTargetTime())) {
            task.setStatus(TaskStatus.COMPLETED);
        } else {
            task.setStatus(TaskStatus.OVERDUE);
        }
        taskRepository.save(task);
        reportRepository.save(report);
        return SuccessResponse.builder().statusCode(200).statusMessage("submitted successfully").build();
    }
}
