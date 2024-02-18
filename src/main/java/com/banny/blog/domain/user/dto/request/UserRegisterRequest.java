package com.banny.blog.domain.user.dto.request;

import com.banny.blog.domain.user.domain.EnumGender;
import com.banny.blog.domain.user.domain.User;
import lombok.*;

@ToString
@Getter
@NoArgsConstructor
public class UserRegisterRequest {

    private String userId;
    private String password;
    @Setter private String salt;
    private String email;
    private String name;
    private String mobile;
    private EnumGender gender;
    private String address;
    private String postcode;

    @Builder
    public UserRegisterRequest(
        String userId,
        String password,
        String email,
        String name,
        String mobile,
        EnumGender gender,
        String address,
        String postcode
    ) {
        this.userId = userId;
        this.password = password;
        this.email = email;
        this.name = name;
        this.mobile = mobile;
        this.gender = gender;
        this.address = address;
        this.postcode = postcode;
    }

    public User toEntity() {
        return User.builder()
                .userId(userId)
                .password(password)
                .salt(salt)
                .email(email)
                .name(name)
                .mobile(mobile)
                .build();
    }

}
