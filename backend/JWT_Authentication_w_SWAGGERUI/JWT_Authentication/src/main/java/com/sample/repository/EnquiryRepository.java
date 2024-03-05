package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sample.entity.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {

}
