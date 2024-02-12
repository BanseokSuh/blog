package com.banny.blog.domain.user.domain;

import com.banny.blog.global.entities.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, unique = true)
    private String userId;

    @Column(length = 50)
    private String password;

    @Column
    private String salt;

    @Column(length = 50, unique = true)
    private String email;

    @Column(length = 50)
    private String name;

    @Column(length = 20)
    private String mobile;

    private EnumGender gender;

    private String address;

    private String postcode;


}
