package com.backend.erp.repository;

import com.backend.erp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
    Optional<List<Todo>> findByUserId(Integer userId);

    Optional<Todo> findById(Integer Id);
}
