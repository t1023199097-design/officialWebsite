package com.beefintech.platform.demo;

import org.springframework.stereotype.Component;

@Component
public class ReservedDemoIntegrationGateway implements DemoIntegrationGateway {

    @Override
    public String sync(DemoRequest request) {
        return "RESERVED";
    }
}

