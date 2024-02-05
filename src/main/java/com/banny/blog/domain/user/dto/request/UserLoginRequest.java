package com.banny.blog.domain.user.dto.request;


import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class UserLoginRequest {

    private String userId;
    private String userPw;
}
