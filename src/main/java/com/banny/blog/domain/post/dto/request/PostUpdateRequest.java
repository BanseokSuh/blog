package com.banny.blog.domain.post.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
public class PostUpdateRequest {

    private String title;
    private String content;

    @Builder
    public PostUpdateRequest(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
