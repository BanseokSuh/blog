package com.banny.blog.domain.post.controller;

import com.banny.blog.domain.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping()
    private String getList() {
        return postService.getList();
    }


}
