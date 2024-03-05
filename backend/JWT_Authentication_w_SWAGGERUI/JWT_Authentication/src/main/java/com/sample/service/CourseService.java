package com.sample.service;

import java.util.List;

import com.sample.dto.CourseDto;

public interface CourseService {
    CourseDto createCourse(CourseDto courseDto);
    CourseDto getCourseById(Long courseId);
    List<CourseDto> getAllCourses();
    CourseDto updateCourse(Long id, CourseDto courseDto);
    void deleteCourse(Long id);
    //CourseDto getCourseBySlug(String courseSlug);
}

