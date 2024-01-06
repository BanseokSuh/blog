package com.banny.blog.domain.post.service;

import com.banny.blog.domain.post.domain.Post;
import com.banny.blog.domain.post.dto.request.PostSaveRequest;
import com.banny.blog.domain.post.dto.response.PostResponse;
import com.banny.blog.domain.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostService {

    private final PostRepository postRepository;

    public String test() {
        return "testing post";
    }

    /**
     * 글 목록 조회
     * @return
     */
    @Transactional(readOnly = true)
    public List<PostResponse> getList() {
        return postRepository.getList().stream()
                .map(PostResponse::new)
                .collect(Collectors.toList());
    }


    /**
     * 글 상세 조회
     * @param postId
     * @return
     */
    public PostResponse get(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow();

        return PostResponse.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .build();
    }


    /**
     * 글 등록
     * @param postSaveRequest
     * @return
     */
    public Long save(PostSaveRequest postSaveRequest) {
        return postRepository.save(postSaveRequest.toEntity()).getId();
    }
}