package com.banny.blog.domain.user.controller;

import com.banny.blog.domain.user.domain.EnumGender;
import com.banny.blog.domain.user.dto.request.UserRegisterRequest;
import com.banny.blog.domain.user.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = RANDOM_PORT)
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ObjectMapper objectMapper;

//    @AfterEach
//    void clean() {
//        userRepository.deleteAll();
//    }

    @Test
    @DisplayName("회원가입")
    public void test1() throws Exception {
        String registeredUserId = "test005";

        UserRegisterRequest userRegisterRequest = UserRegisterRequest.builder()
                .userId(registeredUserId)
                .email(registeredUserId + "@gmail.com")
                .password("123")
                .name("testName")
                .mobile("0101112222")
                .gender(EnumGender.M)
                .address("testAddress001")
                .postcode("12345")
                .build();

        String json = objectMapper.writeValueAsString(userRegisterRequest);

        mockMvc.perform(post("/api/v1/user/register")
                        .contentType(APPLICATION_JSON)
                        .content(json))
            .andExpect(status().isOk())
            .andDo(print());

        Assertions.assertThat(userRepository.findByUserId(registeredUserId).getUserId()).isEqualTo("test005");
    }

}