package com.banny.blog.domain.post.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@ToString
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
