package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sample.dto.PaymentDto;
import com.sample.service.PaymentService;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/post")
    public ResponseEntity<PaymentDto> createPayment(@RequestBody PaymentDto paymentDto) {
        PaymentDto savedPayment = paymentService.createPayment(paymentDto);
        return new ResponseEntity<>(savedPayment, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentDto> getPaymentById(@PathVariable("id") Long paymentId) {
        PaymentDto paymentDto = paymentService.getPaymentById(paymentId);
        return ResponseEntity.ok(paymentDto);
    }

    @GetMapping("/all")
    public ResponseEntity<List<PaymentDto>> getAllPayments() {
        List<PaymentDto> payments = paymentService.getAllPayments();
        return ResponseEntity.ok(payments);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PaymentDto> updatePayment(@PathVariable Long id, @RequestBody PaymentDto paymentDto) {
        PaymentDto updatedPayment = paymentService.updatePayment(id, paymentDto);
        return ResponseEntity.ok(updatedPayment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
        return ResponseEntity.noContent().build();
    }
}
