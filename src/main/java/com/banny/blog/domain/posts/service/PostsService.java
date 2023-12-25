package com.banny.blog.domain.posts.service;

import com.banny.blog.domain.posts.repository.PostsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PostsService {

//    private final PostsRepository postsRepository;

    public String test() {
        return "testing posts";
    }

}
