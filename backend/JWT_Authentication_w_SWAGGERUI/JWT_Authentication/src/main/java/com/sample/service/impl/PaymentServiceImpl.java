package com.sample.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.sample.dto.PaymentDto;
import com.sample.entity.Payment;
import com.sample.exception.ResourceNotFoundException;
import com.sample.mapper.PaymentMapper;
import com.sample.repository.PaymentRepository;
import com.sample.service.PaymentService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private PaymentRepository paymentRepository;

    @Override
    public PaymentDto createPayment(PaymentDto paymentDto) {
        Payment payment = PaymentMapper.mapToPayment(paymentDto);
        Payment savedPayment = paymentRepository.save(payment);
        return PaymentMapper.mapToDto(savedPayment);
    }

    @Override
    public PaymentDto getPaymentById(Long paymentId) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new ResourceNotFoundException("Payment is not exist with given id : " + paymentId));

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
                .orElseThrow(() -> new ResourceNotFoundException("Payment is not exist with given id : " + id));

        existingPayment.setCardNumber(paymentDto.getCardNumber());
        existingPayment.setCcv(paymentDto.getCcv());
        existingPayment.setFullName(paymentDto.getFullName());
        existingPayment.setExpiryDate(paymentDto.getExpiryDate());

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
