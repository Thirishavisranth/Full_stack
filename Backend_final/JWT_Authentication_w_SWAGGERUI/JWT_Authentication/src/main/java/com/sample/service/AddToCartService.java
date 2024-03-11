package com.sample.service;

import com.sample.entity.AddToCart;

public interface AddToCartService {
    AddToCart addToCart(Long userId, Long courseId);

    void removeFromCart(Long userId, Long courseId);

    AddToCart getCartByUserId(Long userId);
    // Other methods as needed...
}
