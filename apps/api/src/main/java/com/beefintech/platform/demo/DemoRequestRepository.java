package com.beefintech.platform.demo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DemoRequestRepository extends JpaRepository<DemoRequest, Long> {

    List<DemoRequest> findAllByOrderByCreatedAtDesc();
}

