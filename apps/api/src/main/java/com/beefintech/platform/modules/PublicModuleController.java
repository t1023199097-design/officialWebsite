package com.beefintech.platform.modules;

import com.beefintech.platform.common.api.ApiResponse;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public/modules")
public class PublicModuleController {

    private final FeatureModuleRegistry featureModuleRegistry;

    public PublicModuleController(FeatureModuleRegistry featureModuleRegistry) {
        this.featureModuleRegistry = featureModuleRegistry;
    }

    @GetMapping
    public ApiResponse<List<FeatureModuleConfig>> list() {
        return ApiResponse.ok(featureModuleRegistry.listModules());
    }
}

