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
    private String cardNumber;
    private String ccv;
    private String fullName;
    private String expiryDate;
}
