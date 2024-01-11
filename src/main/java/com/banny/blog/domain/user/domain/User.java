package com.banny.blog.domain.user.domain;

import com.banny.blog.global.entities.BaseDateEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
public class User extends BaseDateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50)
    private String email;

    @Column(length = 50)
    private String name;

    @Column(length = 50)
    private String password;

    @Column(length = 20)
    private String mobile;

    private String gender;

    private String address;

    private String postcode;


}
