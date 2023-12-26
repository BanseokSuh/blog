package com.banny.blog.domain.users.controllers;

import com.banny.blog.domain.users.service.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UsersController {

    private final UsersService usersService;

    @GetMapping("/api/v1/users/test")
    private String test() {
        return usersService.test();
    }
}
