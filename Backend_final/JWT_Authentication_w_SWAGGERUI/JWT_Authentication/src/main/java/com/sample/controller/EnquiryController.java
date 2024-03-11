package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.sample.dto.EnquiryDto;
import com.sample.service.EnquiryService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = "http://localhost:5173")
public class EnquiryController {

    @Autowired
    private EnquiryService enquiryService;

    @PostMapping("/post")
    // @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<EnquiryDto> createEnquiry(@RequestBody EnquiryDto enquiryDto) {
        EnquiryDto savedEnquiry = enquiryService.createEnquiry(enquiryDto);
        return new ResponseEntity<>(savedEnquiry, HttpStatus.CREATED);
    }

    @PostMapping("/reply/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<EnquiryDto> replyToEnquiry(@PathVariable Long id, @RequestBody String adminReply) {
        EnquiryDto repliedEnquiry = enquiryService.replyToEnquiry(id, adminReply);
        return ResponseEntity.ok(repliedEnquiry);
    }

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<List<EnquiryDto>> getAllEnquiries() {
        List<EnquiryDto> enquiries = enquiryService.getAllEnquiries();
        return ResponseEntity.ok(enquiries);
    }

    @GetMapping("/{id}")
    // @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<EnquiryDto> getEnquiryById(@PathVariable Long id) {
        EnquiryDto enquiryDto = enquiryService.getEnquiryById(id);
        return ResponseEntity.ok(enquiryDto);
    }

    @PutMapping("/{id}")
    //@PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<EnquiryDto> updateEnquiry(@PathVariable Long id, @RequestBody EnquiryDto enquiryDto) {
        EnquiryDto updatedEnquiry = enquiryService.updateEnquiry(id, enquiryDto);
        return ResponseEntity.ok(updatedEnquiry);
    }

    @DeleteMapping("/{id}")
    // @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Void> deleteEnquiry(@PathVariable Long id) {
        enquiryService.deleteEnquiry(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{userId}")
    // @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<List<EnquiryDto>> getEnquiriesByUserId(@PathVariable Long userId) {
        List<EnquiryDto> userEnquiries = enquiryService.getEnquiriesByUserId(userId);
        return ResponseEntity.ok(userEnquiries);
    }

}
