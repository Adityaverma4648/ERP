package com.backend.erp.response;

import com.backend.erp.model.ProjectUserList;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserProjectResponse {
   private List<ProjectUserList> users;
}
