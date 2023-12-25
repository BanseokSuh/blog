package com.banny.blog.domain.posts.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;

@Entity
public class Posts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // TODO
    private Long id;

    private String title;

    private String content;

    @Builder
    public Posts(String title, String content) {
        this.title = title;
        this.content = content;
    }

}
