package com.banny.blog.domain.post.domain;

import com.banny.blog.global.entities.BaseEntity;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;

@Getter
@Entity
public class Post extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // TODO
    private Long id;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(columnDefinition = "integer default 0")
    private int viewCount;

    private Boolean deleted = Boolean.FALSE;


    @Builder
    public Post(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
