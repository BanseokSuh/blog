package com.banny.blog.domain.post.controller;

import com.banny.blog.domain.post.domain.Post;
import com.banny.blog.domain.post.repository.PostRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(webEnvironment = RANDOM_PORT) // TODO
@AutoConfigureMockMvc // TODO
class PostControllerTest {

    @Autowired
    private MockMvc mockMvc; // TODO

    @Autowired
    private TestRestTemplate restTemplate; // TODO

    @Autowired
    private PostRepository postRepository;

    @BeforeEach
    void clean() {
        postRepository.deleteAll();
    }


    @Test
    @DisplayName("'testing post' 문자열이 랜딩된다.")
    public void test1() throws Exception {
        // given
        String txt = "testing post";

        // when
        String body = this.restTemplate.getForObject("/api/v1/post/test", String.class);

        // then
        assertThat(body).contains(txt);
    }


    @Test
    @DisplayName("'testing post' 문자열이 리턴된다.")
    public void test2() throws Exception {
        // given
        String txt = "testing post";

        // expected
        mockMvc.perform(get("/api/v1/post/test"))
                .andExpect(status().isOk())
                .andExpect(content().string(txt))
                .andDo(print());
    }

    @Test
    @DisplayName("글 목록이 리턴된다.")
    public void test3() throws Exception {
        // given
        List<Post> requestPosts = IntStream.range(1, 20)
                .mapToObj(i -> Post.builder()
                        .title("반삭이 제목 " + i)
                        .content("낙성대 " + i)
                        .build())
                .collect(Collectors.toList());

        postRepository.saveAll(requestPosts);

        // expected
        mockMvc.perform(get("/api/v1/post").contentType(APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(19))
                .andExpect(jsonPath("$[0].title").value("반삭이 제목 19"))
                .andExpect(jsonPath("$[0].content").value("낙성대 19"));
    }
}