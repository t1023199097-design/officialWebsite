package com.beefintech.platform.modules;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class FeatureModuleRegistry {

    public List<FeatureModuleConfig> listModules() {
        List<FeatureModuleConfig> modules = new ArrayList<FeatureModuleConfig>();
        modules.add(build("industry-insights", "Insurance Insights Hub", "政策解读、行业资讯与解决方案观察",
            "为保险科技团队预留资讯/政策专栏能力，后续可接 CMS 或后台发布流。",
            FeatureModuleCategory.CONTENT, "/services/industry-insights", "/admin/services/industry-insights"));
        modules.add(build("faq-ticket-center", "FAQ & Ticket Center", "常见问题、在线工单与版本更新中心",
            "为客户赋能场景预留统一入口，后续可按时间接入 FAQ、工单和更新日志。",
            FeatureModuleCategory.SUPPORT, "/services/faq-ticket-center", "/admin/services/faq-ticket-center"));
        modules.add(build("roi-calculator", "ROI Calculator", "保险科技投资回报计算器与术语工具",
            "为 ROI 计算器和术语字典提供统一扩展位，适合比赛后续做差异化功能。",
            FeatureModuleCategory.TOOLS, "/services/roi-calculator", "/admin/services/roi-calculator"));
        return modules;
    }

    private FeatureModuleConfig build(String slug, String name, String tagline, String description,
                                      FeatureModuleCategory category, String publicRoute, String adminRoute) {
        FeatureModuleConfig config = new FeatureModuleConfig();
        config.setSlug(slug);
        config.setName(name);
        config.setTagline(tagline);
        config.setDescription(description);
        config.setEnabled(false);
        config.setCategory(category);
        config.setStatus(FeatureModuleStatus.RESERVED);
        config.setPublicRoute(publicRoute);
        config.setAdminRoute(adminRoute);
        return config;
    }
}

