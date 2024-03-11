package com.sample.mapper;

import com.sample.dto.PaymentDto;
import com.sample.entity.Course;
import com.sample.entity.Payment;
import com.sample.entity.UserInfo;

public class PaymentMapper {

    public static PaymentDto mapToDto(Payment payment) {
        return new PaymentDto(
                payment.getId(),
                payment.getFullName(),
                payment.getCardNumber(),
                payment.getExpiryDate(),
                payment.getCcv(),
                payment.getCourse().getId(),  // Use courseId instead of courseName
                payment.getUser().getId()     // Use userId instead of studentName
        );
    }

    public static Payment mapToPayment(PaymentDto paymentDto) {
        Payment payment = new Payment();
        payment.setId(paymentDto.getId());
        payment.setFullName(paymentDto.getFullName());
        payment.setCardNumber(paymentDto.getCardNumber());
        payment.setExpiryDate(paymentDto.getExpiryDate());
        payment.setCcv(paymentDto.getCcv());

        // You need to set the Course and UserInfo entities based on the provided IDs
        Course course = new Course();
        course.setId(paymentDto.getCourseId());

        UserInfo user = new UserInfo();
        user.setId(paymentDto.getUserId());

        payment.setCourse(course);
        payment.setUser(user);

        return payment;
    }
}
