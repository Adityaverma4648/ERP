package com.backend.erp.repository;

import com.backend.erp.model.TaskReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<TaskReport, Integer> {
}
