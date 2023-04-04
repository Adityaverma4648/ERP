package com.backend.erp.repository;

import com.backend.erp.model.ProjectTask;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TaskRepository extends JpaRepository<ProjectTask, Integer> {
    Optional<List<ProjectTask>> findByUserId(Integer id);

}
