package com.backend.erp.request;

import com.backend.erp.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TodoRequest {
    private Boolean status;
    private String task;
}
