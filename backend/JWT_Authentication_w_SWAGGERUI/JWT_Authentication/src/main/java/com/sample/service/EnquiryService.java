package com.sample.service;

import java.util.List;
import com.sample.dto.EnquiryDto;

public interface EnquiryService {
    EnquiryDto createEnquiry(EnquiryDto enquiryDto);
    EnquiryDto getEnquiryById(Long enquiryId);
    List<EnquiryDto> getAllEnquiries();
    EnquiryDto updateEnquiry(Long id, EnquiryDto enquiryDto);
    void deleteEnquiry(Long id);
}
