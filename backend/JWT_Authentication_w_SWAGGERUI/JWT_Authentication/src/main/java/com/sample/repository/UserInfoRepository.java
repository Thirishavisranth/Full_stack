package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.entity.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
    Optional<UserInfo> findByName(String username);

}
 