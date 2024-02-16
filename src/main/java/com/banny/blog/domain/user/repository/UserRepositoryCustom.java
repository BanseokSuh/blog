package com.banny.blog.domain.user.repository;

import com.banny.blog.domain.user.domain.User;

public interface UserRepositoryCustom {
    User findByUserId(String userId);
}
