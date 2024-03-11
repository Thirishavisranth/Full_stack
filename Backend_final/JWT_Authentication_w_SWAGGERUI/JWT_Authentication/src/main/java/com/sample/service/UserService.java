package com.sample.service;

import com.sample.entity.UserInfo;
import com.sample.repository.UserInfoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String addUser(UserInfo userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        repository.save(userInfo);
        return "User added to system";
    }

    public Optional<UserInfo> getUserById(Long id) {
        return repository.findById(id);
    }

    public Optional<UserInfo> getUserByUsername(String username) {
        return repository.findByName(username);
    }

    public void deleteUser(Long id) {
        repository.deleteById(id);
    }

    public void updateCurrentUser(String username, UserInfo updatedUserInfo) {
        Optional<UserInfo> optionalUser = repository.findByName(username);
        UserInfo existingUser = optionalUser.orElseThrow(() -> new RuntimeException("User not found with username: " + username));

        // Update user information
        existingUser.setName(updatedUserInfo.getName());
        existingUser.setEmail(updatedUserInfo.getEmail());
        // Update other fields as needed

        // Save the updated user to the database
        repository.save(existingUser);
    }
}





