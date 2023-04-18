package com.backend.erp.repository;

import com.backend.erp.model.ProjectUserList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProjectUserListRepository  extends JpaRepository<ProjectUserList, Integer> {
    Optional<List<ProjectUserList>> findByUserId(Integer userId);

    Optional<List<ProjectUserList>> findByProjectId(Integer userId);
}
