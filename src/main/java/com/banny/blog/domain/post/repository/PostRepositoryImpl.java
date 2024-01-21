package com.banny.blog.domain.post.repository;

import com.banny.blog.domain.post.domain.Post;
import com.banny.blog.domain.post.domain.QPost;
import com.querydsl.core.QueryResults;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

@RequiredArgsConstructor
public class PostRepositoryImpl implements PostRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public Page<Post> getList(Pageable pageable) {
        QueryResults<Post> results = jpaQueryFactory.selectFrom(QPost.post)
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .orderBy(QPost.post.id.desc())
                .fetchResults();

        // PageImpl 클래스는 Page 인터페이스를 구현한 클래스로
        // Pageable 인터페이스를 구현한 PageRequest 인스턴스와 조회 결과를 담고 있는 List, 전체 조회 결과 수를 인자로 받아 생성된다.
        return new PageImpl<>(results.getResults(), pageable, results.getTotal());
    }

}
