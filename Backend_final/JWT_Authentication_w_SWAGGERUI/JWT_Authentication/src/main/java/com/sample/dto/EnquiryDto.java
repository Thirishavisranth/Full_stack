package com.sample.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EnquiryDto {

    private Long id;
    private Long userId; // Add this field
    private String courseName;
    private String studentEmail;
    private String typeOfEnquiry;
    private String description;
    private String status;
    private String adminReply;

    // Add the getUserId() method
    public Long getUserId() {
        return userId;
    }

    // Add the setUserId() method
    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
