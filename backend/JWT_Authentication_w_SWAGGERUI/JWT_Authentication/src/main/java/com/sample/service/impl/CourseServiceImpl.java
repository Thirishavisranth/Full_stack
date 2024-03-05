package com.sample.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.sample.dto.CourseDto;
import com.sample.entity.Course;
import com.sample.exception.ResourceNotFoundException;
import com.sample.mapper.CourseMapper;
import com.sample.repository.CourseRepository;
import com.sample.service.CourseService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CourseServiceImpl implements CourseService {

    private CourseRepository courseRepository;

    @Override
    public CourseDto createCourse(CourseDto courseDto) {
        Course course = CourseMapper.mapToCourse(courseDto);
        Course savedCourse = courseRepository.save(course);
        return CourseMapper.mapToDto(savedCourse);
    }

    @Override
    public CourseDto getCourseById(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course is not exist with given id : " + courseId));

        return CourseMapper.mapToDto(course);
    }

    @Override
    public List<CourseDto> getAllCourses() {
        List<Course> courses = courseRepository.findAll();

        return courses.stream()
                .map(CourseMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public CourseDto updateCourse(Long id, CourseDto courseDto) {
        Course existingCourse = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course is not exist with given id : " + id));

        existingCourse.setCourseName(courseDto.getCourseName());
        existingCourse.setDescription(courseDto.getDescription());
        existingCourse.setDuration(courseDto.getDuration());
        existingCourse.setCost(courseDto.getCost());

        Course updatedCourse = courseRepository.save(existingCourse);
        return CourseMapper.mapToDto(updatedCourse);
    }

    @Override
    public void deleteCourse(Long id) {
        if (!courseRepository.existsById(id)) {
            throw new ResourceNotFoundException("Course not found with id: " + id);
        }
        courseRepository.deleteById(id);
    }
}
