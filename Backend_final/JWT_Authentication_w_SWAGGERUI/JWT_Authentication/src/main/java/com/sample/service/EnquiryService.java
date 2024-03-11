package com.sample.service;

import java.util.List;

import com.sample.dto.EnquiryDto;

public interface EnquiryService {
    EnquiryDto createEnquiry(EnquiryDto enquiryDto);
    EnquiryDto replyToEnquiry(Long enquiryId, String adminReply);
    List<EnquiryDto> getAllEnquiries();
    EnquiryDto getEnquiryById(Long enquiryId);
    List<EnquiryDto> getEnquiriesByUserId(Long userId);  // New method
    EnquiryDto updateEnquiry(Long enquiryId, EnquiryDto enquiryDto);
    void deleteEnquiry(Long enquiryId);
}
