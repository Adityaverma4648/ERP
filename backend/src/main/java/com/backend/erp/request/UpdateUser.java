package com.backend.erp.request;

import com.backend.erp.model.AvatarUrl;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUser{
    private String name;
    private String username;
    private String email;
    @Enumerated(EnumType.STRING)
    private AvatarUrl avatar;
}
