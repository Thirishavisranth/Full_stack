package com.sample.service.impl;

import com.sample.dto.PaymentDto;
import com.sample.entity.Payment;
import com.sample.exception.ResourceNotFoundException;
import com.sample.mapper.PaymentMapper;
import com.sample.repository.PaymentRepository;
import com.sample.service.PaymentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    @Override
    public PaymentDto createPayment(PaymentDto paymentDto) {
        Payment payment = PaymentMapper.mapToPayment(paymentDto);
        Payment savedPayment = paymentRepository.save(payment);
        return PaymentMapper.mapToDto(savedPayment);
    }

    @Override
    public PaymentDto getPaymentById(Long paymentId) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found with given id : " + paymentId));

        return PaymentMapper.mapToDto(payment);
    }

    @Override
    public List<PaymentDto> getAllPayments() {
        List<Payment> payments = paymentRepository.findAll();

        return payments.stream()
                .map(PaymentMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public PaymentDto updatePayment(Long id, PaymentDto paymentDto) {
        Payment existingPayment = paymentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not exist with given id : " + id));

        existingPayment.setFullName(paymentDto.getFullName());
        existingPayment.setCardNumber(paymentDto.getCardNumber());
        existingPayment.setExpiryDate(paymentDto.getExpiryDate());
        existingPayment.setCcv(paymentDto.getCcv());

        Payment updatedPayment = paymentRepository.save(existingPayment);
        return PaymentMapper.mapToDto(updatedPayment);
    }

    @Override
    public void deletePayment(Long id) {
        if (!paymentRepository.existsById(id)) {
            throw new ResourceNotFoundException("Payment not found with id: " + id);
        }
        paymentRepository.deleteById(id);
    }
}
