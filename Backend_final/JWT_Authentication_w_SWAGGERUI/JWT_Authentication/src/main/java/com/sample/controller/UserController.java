package com.sample.controller;

import com.sample.dto.AuthRequest;
import com.sample.entity.UserInfo;
import com.sample.service.JwtService;
import com.sample.service.UserService;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome! This endpoint is not secure.";
    }

    @PostMapping("/new")
    public String addNewUser(@RequestBody UserInfo userInfo) {
        return service.addUser(userInfo);
    }

    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("Invalid user request!");
        }
    }

    @GetMapping("/users/{id}")
    public UserInfo getUserById(@PathVariable Long id) {
        Optional<UserInfo> optionalUser = service.getUserById(id);
        return optionalUser.orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
    }

    @GetMapping("/user")
    public UserInfo getCurrentUser(Principal principal) {
        String username = principal.getName();
        Optional<UserInfo> optionalUser = service.getUserByUsername(username);
        return optionalUser.orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username));
    }
    @PutMapping("/update")
    public String updateCurrentUser(@RequestBody UserInfo updatedUserInfo, Principal principal) {
        // Make sure to use updatedUserInfo.getId() to get the user ID
        String username = principal.getName();
        service.updateCurrentUser(username, updatedUserInfo);
        return "User updated successfully";
    }
    

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        service.deleteUser(id);
        return "User deleted successfully";
    }
}
