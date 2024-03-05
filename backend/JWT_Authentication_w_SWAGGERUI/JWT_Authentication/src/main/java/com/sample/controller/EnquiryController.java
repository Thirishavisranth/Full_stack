package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sample.dto.EnquiryDto;
import com.sample.service.EnquiryService;

@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = "http://localhost:5173")
public class EnquiryController {

    @Autowired
    private EnquiryService enquiryService;

    @PostMapping("/post")
    public ResponseEntity<EnquiryDto> createEnquiry(@RequestBody EnquiryDto enquiryDto) {
        EnquiryDto savedEnquiry = enquiryService.createEnquiry(enquiryDto);
        return new ResponseEntity<>(savedEnquiry, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnquiryDto> getEnquiryId(@PathVariable("id") Long enquiryId) {
        EnquiryDto enquiryDto = enquiryService.getEnquiryById(enquiryId);
        return ResponseEntity.ok(enquiryDto);
    }

    @GetMapping("/all")
    public ResponseEntity<List<EnquiryDto>> getAllEnquiries() {
        List<EnquiryDto> enquiries = enquiryService.getAllEnquiries();
        return ResponseEntity.ok(enquiries);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnquiryDto> updateEnquiry(@PathVariable Long id, @RequestBody EnquiryDto enquiryDto) {
        EnquiryDto updatedEnquiry = enquiryService.updateEnquiry(id, enquiryDto);
        return ResponseEntity.ok(updatedEnquiry);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnquiry(@PathVariable Long id) {
        enquiryService.deleteEnquiry(id);
        return ResponseEntity.noContent().build();
    }
}
