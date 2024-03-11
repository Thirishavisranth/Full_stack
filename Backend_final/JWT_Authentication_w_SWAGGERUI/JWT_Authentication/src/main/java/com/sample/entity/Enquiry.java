package com.sample.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "enquiries")
public class Enquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "course_name", nullable = false)
    private String courseName;

    @Column(name = "student_email", nullable = false)
    private String studentEmail;

    @Column(name = "type_of_enquiry", nullable = false)
    private String typeOfEnquiry;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "status", nullable = false)
    private String status = "Pending";

    @Column(name = "admin_reply")
    private String adminReply;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserInfo user;
    // Additional logic to set default values if adminReply is null
    public void setDefaultValues() {
        if (adminReply == null) {
            status = "No Response";
            adminReply = "No Response";
        }
    }
}
