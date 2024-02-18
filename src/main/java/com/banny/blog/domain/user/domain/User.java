package com.banny.blog.domain.user.domain;

import com.banny.blog.global.entities.BaseEntity;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

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

    @Enumerated(EnumType.STRING)
    private EnumGender gender;

    private String address;

    private String postcode;

    @Builder
    public User(String userId, String password, String salt, String email, String name, String mobile, EnumGender gender, String address, String postcode) {
        this.userId = userId;
        this.password = password;
        this.salt = salt;
        this.email = email;
        this.name = name;
        this.mobile = mobile;
        this.gender = gender;
        this.address = address;
        this.postcode = postcode;
    }
}
