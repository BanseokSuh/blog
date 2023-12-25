package com.banny.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = {
		DataSourceAutoConfiguration.class, // 서버 구동 시 DB 설정값 없이 구동되게 처리
		SecurityAutoConfiguration.class // 서버 구동 시 Spring Security 로그인 없이 구동되게 처리
})
public class BlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
	}
}
