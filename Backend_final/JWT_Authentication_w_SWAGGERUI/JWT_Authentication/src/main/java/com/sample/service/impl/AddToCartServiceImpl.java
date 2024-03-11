package com.sample.service.impl;

import com.sample.entity.AddToCart;
import com.sample.entity.Course;
import com.sample.entity.UserInfo;
import com.sample.exception.ResourceNotFoundException;
import com.sample.repository.AddToCartRepository;
import com.sample.repository.CourseRepository;
import com.sample.repository.UserInfoRepository;
import com.sample.service.AddToCartService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddToCartServiceImpl implements AddToCartService {

    private final AddToCartRepository addToCartRepository;
    private final CourseRepository courseRepository;
    private final UserInfoRepository userInfoRepository;

    public AddToCartServiceImpl(AddToCartRepository addToCartRepository, CourseRepository courseRepository, UserInfoRepository userInfoRepository) {
        this.addToCartRepository = addToCartRepository;
        this.courseRepository = courseRepository;
        this.userInfoRepository = userInfoRepository;
    }

    @Override
    public AddToCart addToCart(Long userId, Long courseId) {
        UserInfo user = userInfoRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    
        AddToCart cart = addToCartRepository.findByUser(user)
                .orElse(new AddToCart());  // Create a new cart if not found
    
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + courseId));
    
        List<Course> courses = cart.getCourses();
        courses.add(course); // Add the selected course to the cart
    
        cart.setCourses(courses);
        cart.setUser(user);  // Set the user for the cart
    
        return addToCartRepository.save(cart);
    }
    

    @Override
    public void removeFromCart(Long userId, Long courseId) {
        UserInfo user = userInfoRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    
        AddToCart cart = addToCartRepository.findByUser(user)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found for user with id: " + userId));
    
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + courseId));
    
        List<Course> courses = cart.getCourses();
        courses.remove(course);
    
        cart.setCourses(courses);
    
        addToCartRepository.save(cart);
    }
    


@Override
public AddToCart getCartByUserId(Long userId) {
    UserInfo user = userInfoRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

    return addToCartRepository.findByUser(user)
            .orElseThrow(() -> new ResourceNotFoundException("Cart not found for user with id: " + userId));
}

}
