package com.sample.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.sample.dto.EnquiryDto;
import com.sample.entity.Enquiry;
import com.sample.exception.ResourceNotFoundException;
import com.sample.mapper.EnquiryMapper;
import com.sample.repository.EnquiryRepository;
import com.sample.service.EnquiryService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EnquiryServiceImpl implements EnquiryService {

    private EnquiryRepository enquiryRepository;

    @Override
    public EnquiryDto createEnquiry(EnquiryDto enquiryDto) {
        Enquiry enquiry = EnquiryMapper.mapToEnquiry(enquiryDto);
        Enquiry savedEnquiry = enquiryRepository.save(enquiry);
        return EnquiryMapper.mapToDto(savedEnquiry);
    }

    @Override
    public EnquiryDto getEnquiryById(Long enquiryId) {
        Enquiry enquiry = enquiryRepository.findById(enquiryId)
                .orElseThrow(() -> new ResourceNotFoundException("Enquiry is not exist with given id : " + enquiryId));

        return EnquiryMapper.mapToDto(enquiry);
    }

    @Override
    public List<EnquiryDto> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryRepository.findAll();

        return enquiries.stream()
                .map(EnquiryMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public EnquiryDto updateEnquiry(Long id, EnquiryDto enquiryDto) {
        Enquiry existingEnquiry = enquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Enquiry is not exist with given id : " + id));

        existingEnquiry.setEmail(enquiryDto.getEmail());
        existingEnquiry.setType(enquiryDto.getType());
        existingEnquiry.setEnquiry(enquiryDto.getEnquiry());

        Enquiry updatedEnquiry = enquiryRepository.save(existingEnquiry);
        return EnquiryMapper.mapToDto(updatedEnquiry);
    }

    @Override
    public void deleteEnquiry(Long id) {
        if (!enquiryRepository.existsById(id)) {
            throw new ResourceNotFoundException("Enquiry not found with id: " + id);
        }
        enquiryRepository.deleteById(id);
    }
}
