package com.beefintech.platform.demo;

import com.beefintech.platform.common.api.ApiResponse;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public/demo-requests")
public class DemoRequestController {

    private final DemoRequestService demoRequestService;

    public DemoRequestController(DemoRequestService demoRequestService) {
        this.demoRequestService = demoRequestService;
    }

    @PostMapping
    public ApiResponse<DemoRequest> create(@Valid @RequestBody DemoRequestCreateRequest request) {
        return ApiResponse.ok(demoRequestService.create(request));
    }
}

