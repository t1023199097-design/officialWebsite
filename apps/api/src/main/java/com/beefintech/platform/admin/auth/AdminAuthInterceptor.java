package com.beefintech.platform.admin.auth;

import com.beefintech.platform.common.api.ApiResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class AdminAuthInterceptor implements HandlerInterceptor {

    private final AdminSessionService sessionService;
    private final ObjectMapper objectMapper;

    public AdminAuthInterceptor(AdminSessionService sessionService, ObjectMapper objectMapper) {
        this.sessionService = sessionService;
        this.objectMapper = objectMapper;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        String token = request.getHeader("X-Admin-Token");
        if (sessionService.isValid(token)) {
            return true;
        }

        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        objectMapper.writeValue(response.getWriter(), ApiResponse.error("Unauthorized admin session", null));
        return false;
    }
}

