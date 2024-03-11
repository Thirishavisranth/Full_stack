package com.sample.repository;

// AddToCartRepository.java

import com.sample.entity.AddToCart;
import com.sample.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AddToCartRepository extends JpaRepository<AddToCart, Long> {
    Optional<AddToCart> findByUser(UserInfo user);
}
