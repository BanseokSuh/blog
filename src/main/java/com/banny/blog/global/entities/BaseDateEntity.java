package com.banny.blog.global.entities;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@MappedSuperclass // BaseDateEntity를 상속받은 엔티티들은 아래 필드들을 컬럼으로 인식
@EntityListeners(AuditingEntityListener.class) // 자동으로 값 매핑 기능 추가
public abstract class BaseDateEntity {

    @CreatedDate
    @Column(updatable = false, nullable = false)
    @CreationTimestamp
    private LocalDateTime createdDate;

    @LastModifiedDate
    @Column(nullable = false)
    @CreationTimestamp
    private LocalDateTime modifiedDate;
}
