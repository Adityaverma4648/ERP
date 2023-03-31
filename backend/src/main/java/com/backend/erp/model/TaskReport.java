package com.backend.erp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "report")
public class TaskReport {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "task_id", referencedColumnName = "id")
    private ProjectTask task;

    @Column(name = "report")
    private String report;

    @Column(name = "status")
    private String url;

    @Column(name = "completedTime")
    private Date completedTime;

}
