package com.banny.blog.domain.post.controller;

import com.banny.blog.domain.post.domain.Post;
import com.banny.blog.domain.post.dto.request.PostSaveRequest;
import com.banny.blog.domain.post.dto.request.PostUpdateRequest;
import com.banny.blog.domain.post.repository.PostRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.PostUpdate;
import org.junit.jupiter.api.AfterEach;
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
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest(webEnvironment = RANDOM_PORT) // TODO
@AutoConfigureMockMvc // TODO
class PostControllerTest {

    /**
     * [x] MockMvc
     * - Spring MVC Test framework
     * - It performs full Spring MVC request
     */
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private TestRestTemplate restTemplate; // TODO

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @AfterEach
//    void clean() {
//        postRepository.deleteAll();
//    }


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


    @Test
    @DisplayName("글 하나가 조회된다.")
    public void test4() throws Exception {
        // given
        PostSaveRequest postSaveRequest = PostSaveRequest.builder()
                .title("글_조회_타이틀")
                .content("글_조회_컨텐츠")
                .build();

        Long postId = postRepository.save(postSaveRequest.toEntity()).getId();

        // expected
        mockMvc.perform(get("/api/v1/post/{postId}", postId)
                        .contentType(APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(postId))
                .andExpect(jsonPath("$.title").value(postSaveRequest.getTitle()))
                .andExpect(jsonPath("$.content").value(postSaveRequest.getContent()))
                .andDo(print());
    }


    @Test
    @DisplayName("글이 저장된다.")
    public void test5() throws Exception {
        // given
        PostSaveRequest postSaveRequest = PostSaveRequest.builder()
                .title("글 저장 테스트 타이틀입니다.")
                .content("글 저장 테스트 컨텐츠입니다. 오늘 날씨는 너무 좋습니다.")
                .build();

        String json = objectMapper.writeValueAsString(postSaveRequest);

        // when
        mockMvc.perform(post("/api/v1/post")
                        .contentType(APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isOk())
                .andDo(print());

        // then
        assertEquals(1L, postRepository.count());

        Post post = postRepository.findAll().get(0);
        assertEquals("글 저장 테스트 타이틀입니다.", post.getTitle());
        assertEquals("글 저장 테스트 컨텐츠입니다. 오늘 날씨는 너무 좋습니다.", post.getContent());
    }


    @Test
    @DisplayName("글이 수정된다.")
    public void test6() throws Exception {
        // given
        Post post = Post.builder()
                .title("수정타이틀_01")
                .content("수정컨텐츠_01")
                .build();

        postRepository.save(post); // 게시글 저장

        String expectedTitle = "수정타이틀_01_수정";
        String expectedContent = "수정컨텐츠_01_수정";

        PostUpdateRequest updateRequest = PostUpdateRequest.builder()
                .title(expectedTitle)
                .content(expectedContent)
                .build();

        // when
        mockMvc.perform(patch("/api/v1/post/{postId}", post.getId())
                        .contentType(APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updateRequest)))
                .andExpect(status().isOk())
                .andDo(print());

        // then
        Post updatedPost = postRepository.findById(post.getId()).orElseThrow();

        assertEquals(expectedTitle, updatedPost.getTitle());
        assertEquals(expectedContent, updatedPost.getContent());
    }


    @Test
    @DisplayName("글이 삭제된다.")
    public void test7() throws Exception {
        // given
        Post post = Post.builder()
                .title("삭제타이틀_01")
                .content("삭제컨텐츠_01")
                .build();
        postRepository.save(post);

        Long postId = post.getId();

        // when
        mockMvc.perform(delete("/api/v1/post/{postId}", postId)
                        .contentType(APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print());

        // then
        Post deletedPost = postRepository.findById(postId).orElseThrow();

        assertEquals(Boolean.TRUE, deletedPost.getDeleted());
    }
}