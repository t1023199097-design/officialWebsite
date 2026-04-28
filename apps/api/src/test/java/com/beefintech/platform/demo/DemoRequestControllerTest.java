package com.beefintech.platform.demo;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class DemoRequestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void createsDemoRequestAndMarksItPending() throws Exception {
        mockMvc.perform(post("/api/public/demo-requests")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"companyName\":\"BeeFintech\",\"contactName\":\"Alex\",\"email\":\"alex@beefintech.com\",\"phone\":\"13800138000\",\"message\":\"Need a product walkthrough\"}"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.data.status").value("PENDING"))
            .andExpect(jsonPath("$.data.companyName").value("BeeFintech"));
    }
}
