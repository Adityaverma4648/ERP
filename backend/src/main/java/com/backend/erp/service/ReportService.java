package com.backend.erp.service;

import com.backend.erp.request.ReportRequest;
import com.backend.erp.response.SuccessResponse;


public interface ReportService {
    public SuccessResponse submit(ReportRequest request, String authToken);

}
