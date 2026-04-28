package com.beefintech.platform.demo;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class DemoRequestCreateRequest {

    @NotBlank
    private String companyName;

    @NotBlank
    private String contactName;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String phone;

    private String message;

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

