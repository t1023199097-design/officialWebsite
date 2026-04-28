package com.beefintech.platform.admin.auth;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.stereotype.Service;

@Service
public class AdminSessionService {

    private final AdminCredentialsProperties credentialsProperties;
    private final Map<String, LocalDateTime> sessions = new ConcurrentHashMap<String, LocalDateTime>();

    public AdminSessionService(AdminCredentialsProperties credentialsProperties) {
        this.credentialsProperties = credentialsProperties;
    }

    public Map<String, Object> login(AdminLoginRequest request) {
        if (!credentialsProperties.getUsername().equals(request.getUsername())
            || !credentialsProperties.getPassword().equals(request.getPassword())) {
            throw new IllegalArgumentException("Invalid admin credentials");
        }

        String token = UUID.randomUUID().toString();
        sessions.put(token, LocalDateTime.now().plusHours(12));

        Map<String, Object> response = new LinkedHashMap<String, Object>();
        response.put("token", token);

        Map<String, Object> user = new LinkedHashMap<String, Object>();
        user.put("username", credentialsProperties.getUsername());
        user.put("displayName", credentialsProperties.getDisplayName());
        response.put("user", user);
        return response;
    }

    public boolean isValid(String token) {
        LocalDateTime expiresAt = sessions.get(token);
        return expiresAt != null && expiresAt.isAfter(LocalDateTime.now());
    }
}

