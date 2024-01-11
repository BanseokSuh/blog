package com.banny.blog.domain.post.dto.request;

public class PostSearchRequest {

    private static final int MAX_SIZE = 2000;

    private int page = 1;

    private int size = 10;

    public long getOffset() {
        return (long) (Math.max(1, page) - 1) * Math.min(size, MAX_SIZE);
    }
}
