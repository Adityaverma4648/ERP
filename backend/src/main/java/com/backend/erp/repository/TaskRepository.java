package com.backend.erp.repository;

import com.backend.erp.model.ProjectTask;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<ProjectTask, Integer> {
}
