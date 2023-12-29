package com.banny.blog.domain.post.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PostService {

//    private final PostRepository postRepository;

    public String test() {
        return "testing users";
    }

    public String getList() {
        System.out.println("======= = getList");
//        return postRepository.getList().stream()
//                .map(PostResponse::new)
//                .collect(Collectors.toList());
        return "String from getList service";
    }

}
