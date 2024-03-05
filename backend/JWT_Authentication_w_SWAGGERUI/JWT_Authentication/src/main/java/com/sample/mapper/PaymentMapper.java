package com.sample.mapper;

import com.sample.dto.PaymentDto;
import com.sample.entity.Payment;

public class PaymentMapper {

    public static PaymentDto mapToDto(Payment payment) {
        return new PaymentDto(
                payment.getId(),
                payment.getCardNumber(),
                payment.getCcv(),
                payment.getFullName(),
                payment.getExpiryDate()
        );
    }

    public static Payment mapToPayment(PaymentDto paymentDto) {
        Payment payment = new Payment();
        payment.setId(paymentDto.getId());
        payment.setCardNumber(paymentDto.getCardNumber());
        payment.setCcv(paymentDto.getCcv());
        payment.setFullName(paymentDto.getFullName());
        payment.setExpiryDate(paymentDto.getExpiryDate());
        return payment;
    }
}
