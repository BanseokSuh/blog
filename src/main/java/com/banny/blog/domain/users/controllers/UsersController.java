package com.banny.blog.domain.users.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsersController {

    @GetMapping("/api/v1/users/test")
    private String test() {
        return "users test";
    }

}
