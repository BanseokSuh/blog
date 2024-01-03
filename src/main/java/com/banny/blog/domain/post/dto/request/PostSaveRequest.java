package com.banny.blog.domain.post.dto.request;

import com.banny.blog.domain.post.domain.Post;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostSaveRequest {

    private String title;
    private String content;

    @Builder
    public PostSaveRequest(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public Post toEntity() {
        return Post.builder()
                .title(title)
                .content(content)
                .build();
    }

}
