package com.banny.blog.domain.posts.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = RANDOM_PORT) // TODO
@AutoConfigureMockMvc // TODO
class PostsControllerTest {

    @Autowired
    private MockMvc mockMvc; // TODO

    @Autowired
    private TestRestTemplate restTemplate; // TODO


    @Test
    public void testing_posts_문자열이_랜딩된다() throws Exception {
        // given
        String txt = "testing posts";

        // when
        String body = this.restTemplate.getForObject("/api/v1/posts/test", String.class);

        // then
        assertThat(body).contains(txt);
    }


    @Test
    public void testing_posts_문자열이_리턴된다() throws Exception {
        // given
        String txt = "testing posts";

        // expected
        mockMvc.perform(get("/api/v1/posts/test"))
                .andExpect(status().isOk())
                .andExpect(content().string(txt))
                .andDo(print());
    }
}