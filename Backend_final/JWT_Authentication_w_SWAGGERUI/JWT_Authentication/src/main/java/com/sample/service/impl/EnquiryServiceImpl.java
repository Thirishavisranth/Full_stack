package com.sample.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.sample.dto.EnquiryDto;
import com.sample.entity.Enquiry;
import com.sample.entity.UserInfo;
import com.sample.exception.ResourceNotFoundException;
import com.sample.mapper.EnquiryMapper;
import com.sample.repository.EnquiryRepository;
import com.sample.repository.UserInfoRepository;
import com.sample.service.EnquiryService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EnquiryServiceImpl implements EnquiryService {

    private EnquiryRepository enquiryRepository;
    private UserInfoRepository userRepository;

    @Override
    public EnquiryDto createEnquiry(EnquiryDto enquiryDto) {
        Enquiry enquiry = EnquiryMapper.mapToEnquiry(enquiryDto);
    
        // Retrieve user information and set it in the enquiry
        UserInfo userInfo = userRepository.findById(enquiryDto.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + enquiryDto.getUserId()));
    
        enquiry.setUser(userInfo);
    
        // Save the enquiry
        Enquiry savedEnquiry = enquiryRepository.save(enquiry);
    
        // Update the user's enquiries
        userInfo.getEnquiries().add(savedEnquiry);
        userRepository.save(userInfo);
    
        return EnquiryMapper.mapToDto(savedEnquiry);
    }
    
    @Override
    public EnquiryDto replyToEnquiry(Long enquiryId, String adminReply) {
        Enquiry existingEnquiry = enquiryRepository.findById(enquiryId)
                .orElseThrow(() -> new ResourceNotFoundException("Enquiry not found with id: " + enquiryId));

        existingEnquiry.setAdminReply(adminReply);
        existingEnquiry.setStatus("Replied"); // Set the status to an appropriate value

        Enquiry repliedEnquiry = enquiryRepository.save(existingEnquiry);
        return EnquiryMapper.mapToDto(repliedEnquiry);
    }

    @Override
    public List<EnquiryDto> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryRepository.findAll();
        return enquiries.stream()
                .map(EnquiryMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public EnquiryDto getEnquiryById(Long enquiryId) {
        Enquiry enquiry = enquiryRepository.findById(enquiryId)
                .orElseThrow(() -> new ResourceNotFoundException("Enquiry not found with id: " + enquiryId));
        return EnquiryMapper.mapToDto(enquiry);
    }

    @Override
    public EnquiryDto updateEnquiry(Long enquiryId, EnquiryDto enquiryDto) {
        Enquiry existingEnquiry = enquiryRepository.findById(enquiryId)
                .orElseThrow(() -> new ResourceNotFoundException("Enquiry not found with id: " + enquiryId));

        existingEnquiry.setCourseName(enquiryDto.getCourseName());
        existingEnquiry.setStudentEmail(enquiryDto.getStudentEmail());
        existingEnquiry.setTypeOfEnquiry(enquiryDto.getTypeOfEnquiry());
        existingEnquiry.setDescription(enquiryDto.getDescription());

        Enquiry updatedEnquiry = enquiryRepository.save(existingEnquiry);
        return EnquiryMapper.mapToDto(updatedEnquiry);
    }

    @Override
    public void deleteEnquiry(Long enquiryId) {
        if (!enquiryRepository.existsById(enquiryId)) {
            throw new ResourceNotFoundException("Enquiry not found with id: " + enquiryId);
        }
        enquiryRepository.deleteById(enquiryId);
    }

    @Override
    public List<EnquiryDto> getEnquiriesByUserId(Long userId) {
        // Assuming you have a method in your repository to retrieve enquiries by user
        // ID
        List<Enquiry> userEnquiries = enquiryRepository.findByUserId(userId);

        // Map the entities to DTOs
        return userEnquiries.stream()
                .map(EnquiryMapper::mapToDto)
                .collect(Collectors.toList());
    }

}
