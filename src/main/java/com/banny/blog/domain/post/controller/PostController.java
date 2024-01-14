package com.banny.blog.domain.post.controller;

import com.banny.blog.domain.post.dto.request.PostUpdateRequest;
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


    /**
     * test
     * @return
     */
    @GetMapping("/test")
    private String test() {
        return postService.test();
    }


    /**
     * 글 목록 조회
     * @return
     */
    @GetMapping()
    private List<PostResponse> getList() {
        return postService.getList();
    }


    /**
     * 글 상세 조회
     * @param postId
     * @return
     */
    @GetMapping("/{postId}")
    private PostResponse get(@PathVariable(name = "postId") Long postId) {
        return postService.get(postId);
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


    /**
     * 글 수정
     * @param postId
     * @param postUpdateRequest
     * @return
     */
    @PatchMapping("/{postId}")
    private Long update(@PathVariable(name = "postId") Long postId,
                        @RequestBody PostUpdateRequest postUpdateRequest) {

        return postService.update(postId, postUpdateRequest);
    }

    /**
     * 글 삭제
     * @param postId
     * @return
     */
    @DeleteMapping("/{postId}")
    private Long delete(@PathVariable(name = "postId") Long postId) {
        return postService.delete(postId);
    }



}