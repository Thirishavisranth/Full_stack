package com.sample.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.entity.Course;


public interface CourseRepository extends JpaRepository<Course, Long> {

}
