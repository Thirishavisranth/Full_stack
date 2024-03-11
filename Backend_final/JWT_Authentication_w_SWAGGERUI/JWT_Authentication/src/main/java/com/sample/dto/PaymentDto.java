package com.sample.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDto {

    private Long id;
    private String fullName;
    private String cardNumber;
    private String expiryDate;
    private String ccv;
    private Long courseId;  // Use courseId instead of courseName
    private Long userId;    // Use userId instead of studentName
}
