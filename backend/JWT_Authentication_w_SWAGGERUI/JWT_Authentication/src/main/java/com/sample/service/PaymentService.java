package com.sample.service;

import java.util.List;
import com.sample.dto.PaymentDto;

public interface PaymentService {
    PaymentDto createPayment(PaymentDto paymentDto);
    PaymentDto getPaymentById(Long paymentId);
    List<PaymentDto> getAllPayments();
    PaymentDto updatePayment(Long id, PaymentDto paymentDto);
    void deletePayment(Long id);
}
