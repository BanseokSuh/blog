package com.banny.blog.domain.post.dto.request;

import com.banny.blog.domain.post.domain.Post;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class PostSaveRequest {
    private String title;
    private String content;

    @Builder
    public PostSaveRequest(String title, String content, String author) {
        this.title = title;
        this.content = content;
    }
}
