package com.banny.blog.domain.post.service;

import com.banny.blog.domain.post.dto.request.PostSaveRequest;
import com.banny.blog.domain.post.dto.response.PostResponse;
import com.banny.blog.domain.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostService {

    private final PostRepository postRepository;

    public String test() {
        return "testing users";
    }

    /**
     * 목록 조회
     * @return
     */
    @Transactional(readOnly = true)
    public List<PostResponse> getList() {

        System.out.println("======= = getList");
        return postRepository.getList().stream()
                .map(PostResponse::new)
                .collect(Collectors.toList());
    }


    /**
     * 등록
     * @return
     */
    public Long save(@RequestBody PostSaveRequest postSaveRequest) {
//        Long insertid = postRepository.save();
        Long insertId = 1L;

        return insertId;
    }
}
