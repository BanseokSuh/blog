package com.banny.blog.domain.users.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;

import java.time.LocalDateTime;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String name;

    private String password;

    private String address;

    private String postcode;

    private LocalDateTime createdDatetime;

    private LocalDateTime modifiedDatetime;

    @Builder
    public Users(String email, String name, String password, String address, String postcode) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.address = address;
        this.postcode = postcode;
    }
}
