package com.banny.blog.domain.user.repository;

import com.banny.blog.domain.user.domain.QUser;
import com.banny.blog.domain.user.domain.User;
import com.querydsl.core.QueryResults;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UserRepositoryImpl implements UserRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public User findByUserId(String userId) {
        QueryResults<User> results = jpaQueryFactory.selectFrom(QUser.user)
                .where(QUser.user.userId.eq(userId))
                .fetchResults();

        if (results.getTotal() == 0) {
            return null;
        }

        return results.getResults().get(0);
    }
}
