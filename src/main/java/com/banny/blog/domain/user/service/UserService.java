package com.banny.blog.domain.user.service;

import com.banny.blog.domain.user.domain.User;
import com.banny.blog.domain.user.dto.request.UserLoginRequest;
import com.banny.blog.domain.user.dto.request.UserRegisterRequest;
import com.banny.blog.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final BCryptPasswordEncoder encoder;
    private final UserRepository userRepository;

    @Transactional
    public String register(UserRegisterRequest userRegisterRequest) {

        /**
         * 1) id, password, email 검증
         *   - id 6자 이상 15자 이하
         *   - password 8자 이상 20자 이하, 영문, 숫자, 특수문자 포함
         *   - email 형식
         * 2) id 중복 체크
         * 3) password 암호화
         * 4) user 저장
         */

        String userId = userRegisterRequest.getUserId();
        String password = userRegisterRequest.getPassword();

        // 1) id, password, email 검증
        if (userId.length() < 6 || userId.length() > 15) {
            throw new IllegalStateException("아이디는 6자 이상 15자 이하여야 합니다.");
        }





        // 2) id 중복 체크
        validateDuplicateUserId(userId);

        User user = User.builder()
                .userId(userId)
                .password(encoder.encode(password)) // 3) password 암호화
                .salt(userRegisterRequest.getSalt())
                .email(userRegisterRequest.getEmail())
                .name(userRegisterRequest.getName())
                .mobile(userRegisterRequest.getMobile())
                .gender(userRegisterRequest.getGender())
                .address(userRegisterRequest.getAddress())
                .postcode(userRegisterRequest.getPostcode())
                .build();

        return userRepository.save(user).getUserId(); // 4) user 저장
    }


    /**
     * 아이디 중복확인
     * @param userId
     */
    private void validateDuplicateUserId(String userId) {
        User foundUser = userRepository.findByUserId(userId);

        if (foundUser != null) {
            throw new IllegalStateException("이미 존재하는 아이디입니다.");
        }
    }


    public String login(UserLoginRequest userLoginRequest) {
        return "logging in users";
    }
}
