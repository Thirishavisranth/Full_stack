package com.sample.mapper;

import com.sample.dto.EnquiryDto;
import com.sample.entity.Enquiry;

public class EnquiryMapper {

    public static EnquiryDto mapToDto(Enquiry enquiry) {
        return new EnquiryDto(
                enquiry.getId(),
                enquiry.getEmail(),
                enquiry.getType(),
                enquiry.getEnquiry()
        );
    }

    public static Enquiry mapToEnquiry(EnquiryDto enquiryDto) {
        Enquiry enquiry = new Enquiry();
        enquiry.setId(enquiryDto.getId());
        enquiry.setEmail(enquiryDto.getEmail());
        enquiry.setType(enquiryDto.getType());
        enquiry.setEnquiry(enquiryDto.getEnquiry());
        return enquiry;
    }
}
