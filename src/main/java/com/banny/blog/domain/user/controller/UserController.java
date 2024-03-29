package com.banny.blog.domain.user.controller;

import com.banny.blog.domain.user.dto.request.UserLoginRequest;
import com.banny.blog.domain.user.dto.request.UserRegisterRequest;
import com.banny.blog.domain.user.service.UserService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;

    /**
     * 회원가입
     * @param userRegisterRequest
     * @return
     */
    @PostMapping("/register")
    private String register(@RequestBody UserRegisterRequest userRegisterRequest) {
        return userService.register(userRegisterRequest);
    }


    /**
     * 로그인
     * @param userLoginRequest
     * @return
     */
    @PostMapping("/login")
    private String login(@RequestBody UserLoginRequest userLoginRequest, HttpSession session) {
        return userService.login(userLoginRequest);
    }

//    @PostMapping("/logout")
//    private String logout() {
//        return userService.logout();
//    }

}
