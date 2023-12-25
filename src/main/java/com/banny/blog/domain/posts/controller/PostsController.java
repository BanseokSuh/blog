package com.banny.blog.domain.posts.controller;

import com.banny.blog.domain.posts.service.PostsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class PostsController {

    private final PostsService postsService;

    @GetMapping("/api/v1/posts/test")
    private String test() {
        return postsService.test();
    }
}
