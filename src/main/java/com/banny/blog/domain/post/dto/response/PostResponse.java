package com.banny.blog.domain.post.dto.response;

import com.banny.blog.domain.post.domain.Post;
import lombok.Builder;

public class PostResponse {
    private final Long id;
    private final String title;
    private final String content;

    public PostResponse(Post posts) {
        this.id = posts.getId();
        this.title = posts.getTitle();
        this.content = posts.getContent();
    }

    @Builder
    public PostResponse(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}
