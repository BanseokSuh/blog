package com.banny.blog.domain.post.dto.response;

import com.banny.blog.domain.post.domain.Post;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PostListResponse {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime createdAt;

    public PostListResponse(Post posts) {
        this.id = posts.getId();
        this.title = posts.getTitle();
        this.content = posts.getContent();
        this.createdAt = posts.getCreatedAt();
    }

    @Builder
    public PostListResponse(Long id, String title, String content, LocalDateTime createdAt) {
        this.id = id;
        this.title = title;
        this.content = content.substring(0, Math.min(content.length(), 10));
        this.createdAt = createdAt;
    }
}
