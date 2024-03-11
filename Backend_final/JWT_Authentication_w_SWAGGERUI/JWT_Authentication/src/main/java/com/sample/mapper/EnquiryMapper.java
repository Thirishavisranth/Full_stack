package com.sample.mapper;

import com.sample.dto.EnquiryDto;
import com.sample.entity.Enquiry;

public class EnquiryMapper {

    public static EnquiryDto mapToDto(Enquiry enquiry) {
        return new EnquiryDto(
                enquiry.getId(),
                // Add the following line to get user ID from UserInfo
                enquiry.getUser() != null ? enquiry.getUser().getId() : null,
                enquiry.getCourseName(),
                enquiry.getStudentEmail(),
                enquiry.getTypeOfEnquiry(),
                enquiry.getDescription(),
                enquiry.getStatus(),
                enquiry.getAdminReply());
    }

    public static Enquiry mapToEnquiry(EnquiryDto enquiryDto) {
        Enquiry enquiry = new Enquiry();
        enquiry.setId(enquiryDto.getId());
        enquiry.setCourseName(enquiryDto.getCourseName());
        enquiry.setStudentEmail(enquiryDto.getStudentEmail());
        enquiry.setTypeOfEnquiry(enquiryDto.getTypeOfEnquiry());
        enquiry.setDescription(enquiryDto.getDescription());
        enquiry.setStatus(enquiryDto.getStatus());
        enquiry.setAdminReply(enquiryDto.getAdminReply());
        return enquiry;
    }
}
