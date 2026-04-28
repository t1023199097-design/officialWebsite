package com.beefintech.platform.admin.auth;

import com.beefintech.platform.common.api.ApiResponse;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/auth")
public class AdminAuthController {

    private final AdminSessionService sessionService;

    public AdminAuthController(AdminSessionService sessionService) {
        this.sessionService = sessionService;
    }

    @PostMapping("/login")
    public ApiResponse<Map<String, Object>> login(@Valid @RequestBody AdminLoginRequest request) {
        return ApiResponse.ok(sessionService.login(request));
    }
}

