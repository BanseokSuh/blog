package com.banny.blog.domain.user.controllers;

import com.banny.blog.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;

    @GetMapping("/api/v1/user/test")
    private String test() {
        return userService.test();
    }
}
