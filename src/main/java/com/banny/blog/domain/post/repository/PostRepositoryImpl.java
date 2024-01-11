//package com.banny.blog.domain.post.repository;
//
//import com.banny.blog.domain.post.domain.Post;
//import com.banny.blog.domain.post.domain.QPost;
//import com.querydsl.jpa.impl.JPAQueryFactory;
//import lombok.RequiredArgsConstructor;
//
//import java.util.List;
//
//@RequiredArgsConstructor
//public class PostRepositoryImpl implements PostRepositoryCustom {
//
//    private final JPAQueryFactory jpaQueryFactory;
//
//    @Override
//    public List<Post> getList() {
//        return jpaQueryFactory.selectFrom(QPost.post)
//                .limit(10)
//                .offset(1)
//                .fetch();
//    }
//}
