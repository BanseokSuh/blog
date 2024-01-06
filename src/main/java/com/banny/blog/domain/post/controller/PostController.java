package com.banny.blog.domain.post.controller;

import com.banny.blog.domain.post.dto.request.PostSaveRequest;
import com.banny.blog.domain.post.dto.response.PostResponse;
import com.banny.blog.domain.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/post")
@RequiredArgsConstructor
@RestController
public class PostController {

    private final PostService postService;

    @GetMapping("/test")
    private String test() {
        return postService.test();
    }

    /**
     * 목록 조회 - GET  /posts
     * 개별 조회 - GET  /posts/{postsId}
     * 등록 - POST  /posts
     * 수정 - PATCH  /posts/{postsId}
     * 삭제 - DELETE  /posts/{postsId}
     */


    /**
     * 글 목록 조회
     * @return
     */
    @GetMapping()
    private List<PostResponse> getList() {
        return postService.getList();
    }


    /**
     * 글 등록
     * @param postSaveRequest
     * @return
     */
    @PostMapping()
    private Long save(@RequestBody PostSaveRequest postSaveRequest) {
        return postService.save(postSaveRequest);
    }


}