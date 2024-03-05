package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sample.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
