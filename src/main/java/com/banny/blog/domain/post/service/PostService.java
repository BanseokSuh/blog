package com.banny.blog.domain.post.service;

import com.banny.blog.domain.post.domain.Post;
import com.banny.blog.domain.post.dto.request.PostSearchRequest;
import com.banny.blog.domain.post.dto.request.PostUpdateRequest;
import com.banny.blog.domain.post.dto.request.PostSaveRequest;
import com.banny.blog.domain.post.dto.response.PostPageResponse;
import com.banny.blog.domain.post.dto.response.PostResponse;
import com.banny.blog.domain.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public PostPageResponse getList(PostSearchRequest postSearchRequest) {

        // pageable 인스턴스 생성
        Pageable pageable = createPageableFromRequest(postSearchRequest);

        // 글 목록 조회
        Page<Post> postPage = postRepository.getList(pageable);

        // 글 목록 조회를 위한 PostResponse 인스턴스 생성
        List<PostResponse> content = convertPostsToPostResponses(postPage.getContent());

        // 글 목록 조회를 위한 PostPageResponse 인스턴스 생성
        return buildPostPageResponse(content, postPage, postSearchRequest);

    }

    /**
     * 글 목록 조회를 위한 pageable 인스턴스 생성
     * @param postSearchRequest
     * @return
     */
    private Pageable createPageableFromRequest(PostSearchRequest postSearchRequest) {
        int page = postSearchRequest.getPage();
        int size = postSearchRequest.getSize();

        return PageRequest.of(page, size);
    }

    /**
     * 글 목록 조회를 위한 PostResponse 인스턴스 생성
     * @param posts
     * @return
     */
    private List<PostResponse> convertPostsToPostResponses(List<Post> posts) {
        return posts.stream()
                .map(PostResponse::new)
                .collect(Collectors.toList());
    }

    /**
     * 글 목록 조회를 위한 PostPageResponse 인스턴스 생성
     * @param content
     * @param postPage
     * @param postSearchRequest
     * @return
     */
    private PostPageResponse buildPostPageResponse(List<PostResponse> content, Page<Post> postPage, PostSearchRequest postSearchRequest) {
        return PostPageResponse.builder()
                .content(content)
                .pageNo(postSearchRequest.getPage())
                .pageSize(postSearchRequest.getSize())
                .totalElements(postPage.getTotalElements())
                .totalPages(postPage.getTotalPages())
                .last(postPage.isLast())
                .build();
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
                .createdAt(post.getCreatedAt())
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


    /**
     * 글 수정
     * @param postId
     * @param postUpdateRequest
     * @return
     */
    @Transactional
    public Long update(Long postId, PostUpdateRequest postUpdateRequest) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시물이 없습니다. postId =" + postId));

        post.update(postUpdateRequest.getTitle(), postUpdateRequest.getContent());

        return postId;
    }


    /**
     * 글 삭제
     * @param postId
     * @return
     */
    @Transactional
    public Long delete(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시물이 없습니다. postId =" + postId));

        post.delete();

        return postId;
    }

}