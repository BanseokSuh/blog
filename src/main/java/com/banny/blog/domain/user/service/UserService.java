package com.banny.blog.domain.user.service;

import com.banny.blog.domain.user.dto.request.UserLoginRequest;
import com.banny.blog.domain.user.dto.request.UserRegisterRequest;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public String register(UserRegisterRequest userRegisterRequest) {
        /**
         *
         */



        return "registering users";
    }

    public String login(UserLoginRequest userLoginRequest) {
        return "logging in users";
    }
}
