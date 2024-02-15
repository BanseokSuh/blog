package com.banny.blog.domain.user.domain;

import com.banny.blog.global.entities.BaseEntity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Setter;

public class UserRole extends BaseEntity {

    private Long id;
    private String name;

    @Setter
    @JoinColumn(name = "user")
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

}
