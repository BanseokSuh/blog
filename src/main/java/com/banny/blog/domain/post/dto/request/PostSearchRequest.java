package com.banny.blog.domain.post.dto.request;

import lombok.*;

@Getter
@Setter
public class PostSearchRequest {

    private Integer page;

    private Integer size;
}
