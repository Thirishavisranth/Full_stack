package com.sample.controller;

import com.sample.entity.AddToCart;
import com.sample.service.AddToCartService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:5173")
public class AddToCartController {

    private final AddToCartService cartService;

    @PostMapping("/add")
    public ResponseEntity<AddToCart> addToCart(@RequestParam Long userId, @RequestParam Long courseId) {
        AddToCart cart = cartService.addToCart(userId, courseId);
        return ResponseEntity.ok(cart);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<String> removeFromCart(@RequestParam Long userId, @RequestParam Long courseId) {
        cartService.removeFromCart(userId, courseId);
        return ResponseEntity.ok("Course removed from cart successfully");
    }
    
    @GetMapping("/get")
    public ResponseEntity<AddToCart> getCartByUserId(@RequestParam Long userId) {
        AddToCart cart = cartService.getCartByUserId(userId);
        return ResponseEntity.ok(cart);
    }
    // Other endpoints as needed...
}
