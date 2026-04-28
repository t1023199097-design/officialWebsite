package com.beefintech.platform.modules;

import com.beefintech.platform.common.api.ApiResponse;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/modules")
public class AdminModuleController {

    private final FeatureModuleRegistry featureModuleRegistry;

    public AdminModuleController(FeatureModuleRegistry featureModuleRegistry) {
        this.featureModuleRegistry = featureModuleRegistry;
    }

    @GetMapping
    public ApiResponse<List<FeatureModuleConfig>> list() {
        return ApiResponse.ok(featureModuleRegistry.listModules());
    }
}

