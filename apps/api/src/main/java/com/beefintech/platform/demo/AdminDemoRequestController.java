package com.beefintech.platform.demo;

import com.beefintech.platform.common.api.ApiResponse;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/demo-requests")
public class AdminDemoRequestController {

    private final DemoRequestService demoRequestService;

    public AdminDemoRequestController(DemoRequestService demoRequestService) {
        this.demoRequestService = demoRequestService;
    }

    @GetMapping
    public ApiResponse<List<DemoRequest>> list() {
        return ApiResponse.ok(demoRequestService.listAll());
    }
}

