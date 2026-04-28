package com.beefintech.platform.modules;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "feature_modules")
public class FeatureModuleConfig {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String tagline;

    @Column(nullable = false, length = 2000)
    private String description;

    @Column(nullable = false)
    private boolean enabled;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FeatureModuleCategory category;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FeatureModuleStatus status;

    @Column(nullable = false)
    private String publicRoute;

    @Column(nullable = false)
    private String adminRoute;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public FeatureModuleCategory getCategory() {
        return category;
    }

    public void setCategory(FeatureModuleCategory category) {
        this.category = category;
    }

    public FeatureModuleStatus getStatus() {
        return status;
    }

    public void setStatus(FeatureModuleStatus status) {
        this.status = status;
    }

    public String getPublicRoute() {
        return publicRoute;
    }

    public void setPublicRoute(String publicRoute) {
        this.publicRoute = publicRoute;
    }

    public String getAdminRoute() {
        return adminRoute;
    }

    public void setAdminRoute(String adminRoute) {
        this.adminRoute = adminRoute;
    }
}

