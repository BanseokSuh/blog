package com.banny.blog.domain.post.repository;

import com.banny.blog.domain.post.domain.Post;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepositoryCustom {
    @Query("SELECT p FROM Post p ORDER BY p.id DESC")
    List<Post> getList();
}
