package com.sample.mapper;

import com.sample.dto.CourseDto;
import com.sample.entity.Course;

public class CourseMapper {

    public static CourseDto mapToDto(Course course) {
        return new CourseDto(
                course.getId(),
                course.getCourseName(),
                course.getDescription(),
                course.getDuration(),
                course.getCost()
        );
    }

    public static Course mapToCourse(CourseDto courseDto) {
        Course course = new Course();
        course.setId(courseDto.getId());
        course.setCourseName(courseDto.getCourseName());
        course.setDescription(courseDto.getDescription());
        course.setDuration(courseDto.getDuration());
        course.setCost(courseDto.getCost());
        return course;
    }
}

