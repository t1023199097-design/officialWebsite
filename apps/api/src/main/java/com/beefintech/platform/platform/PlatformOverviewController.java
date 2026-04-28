package com.beefintech.platform.platform;

import com.beefintech.platform.common.api.ApiResponse;
import com.beefintech.platform.modules.FeatureModuleConfig;
import com.beefintech.platform.modules.FeatureModuleRegistry;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public/platform")
public class PlatformOverviewController {

    private final FeatureModuleRegistry featureModuleRegistry;

    public PlatformOverviewController(FeatureModuleRegistry featureModuleRegistry) {
        this.featureModuleRegistry = featureModuleRegistry;
    }

    @GetMapping("/overview")
    public ApiResponse<Map<String, Object>> overview() {
        Map<String, Object> payload = new LinkedHashMap<String, Object>();
        payload.put("brandName", "BeeFintech");
        payload.put("headline", "From static brochure to insurance technology service platform");
        payload.put("summary", "Competition starter with public site, demo API orchestration, admin console and reserved value-added modules.");
        payload.put("solutions", buildSolutions());
        payload.put("modules", featureModuleRegistry.listModules());
        return ApiResponse.ok(payload);
    }

    private List<Map<String, String>> buildSolutions() {
        List<Map<String, String>> items = new ArrayList<Map<String, String>>();
        items.add(solution("Brand Portal", "Dynamic official site for value narrative, products and scenarios."));
        items.add(solution("Demo Workflow", "Lead capture, persistence and external API adapter placeholder."));
        items.add(solution("Module Registry", "Reserved interfaces for content, support and tools services."));
        return items;
    }

    private Map<String, String> solution(String title, String body) {
        Map<String, String> item = new LinkedHashMap<String, String>();
        item.put("title", title);
        item.put("body", body);
        return item;
    }
}

