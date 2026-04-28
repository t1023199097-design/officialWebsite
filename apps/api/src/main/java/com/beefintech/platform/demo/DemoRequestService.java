package com.beefintech.platform.demo;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DemoRequestService {

    private final DemoRequestRepository repository;
    private final DemoIntegrationGateway integrationGateway;

    public DemoRequestService(DemoRequestRepository repository, DemoIntegrationGateway integrationGateway) {
        this.repository = repository;
        this.integrationGateway = integrationGateway;
    }

    @Transactional
    public DemoRequest create(DemoRequestCreateRequest request) {
        DemoRequest demoRequest = new DemoRequest();
        demoRequest.setCompanyName(request.getCompanyName());
        demoRequest.setContactName(request.getContactName());
        demoRequest.setEmail(request.getEmail());
        demoRequest.setPhone(request.getPhone());
        demoRequest.setMessage(request.getMessage());
        demoRequest.setStatus(DemoRequestStatus.PENDING);
        demoRequest.setExternalSyncState("QUEUED");

        DemoRequest savedRequest = repository.save(demoRequest);
        savedRequest.setExternalSyncState(integrationGateway.sync(savedRequest));
        return repository.save(savedRequest);
    }

    @Transactional(readOnly = true)
    public List<DemoRequest> listAll() {
        return repository.findAllByOrderByCreatedAtDesc();
    }
}

