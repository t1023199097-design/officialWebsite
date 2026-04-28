package com.beefintech.platform.config;

import com.beefintech.platform.admin.auth.AdminAuthInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final AdminAuthInterceptor adminAuthInterceptor;
    private final String[] allowedOrigins;

    public WebConfig(AdminAuthInterceptor adminAuthInterceptor,
                     @Value("${app.web.allowed-origins}") String[] allowedOrigins) {
        this.adminAuthInterceptor = adminAuthInterceptor;
        this.allowedOrigins = allowedOrigins;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(adminAuthInterceptor)
            .addPathPatterns("/api/admin/**")
            .excludePathPatterns("/api/admin/auth/**");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins(allowedOrigins)
            .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
            .allowedHeaders("*")
            .allowCredentials(false);
    }
}

