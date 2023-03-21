package com.backend.erp.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDataResponse {
    private Integer id;
    private String name;
    private String email;
    private String username;
}
