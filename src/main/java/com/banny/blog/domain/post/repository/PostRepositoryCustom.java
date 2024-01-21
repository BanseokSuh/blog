package com.banny.blog.domain.post.repository;

import com.banny.blog.domain.post.domain.Post;
import com.banny.blog.domain.post.dto.request.PostSearchRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepositoryCustom {

    Page<Post> getList(Pageable pageable);
}
