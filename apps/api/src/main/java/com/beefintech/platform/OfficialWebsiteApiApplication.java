package com.beefintech.platform;

import com.beefintech.platform.admin.auth.AdminCredentialsProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AdminCredentialsProperties.class)
public class OfficialWebsiteApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(OfficialWebsiteApiApplication.class, args);
    }
}

