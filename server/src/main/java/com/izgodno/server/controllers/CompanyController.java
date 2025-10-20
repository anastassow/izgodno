package com.izgodno.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.izgodno.server.dtos.SearchResponse;
import com.izgodno.server.services.CompanyServiceImpl;


@RestController
@RequestMapping("api/products")
public class CompanyController {
    
    @Autowired
    private CompanyServiceImpl companyServiceImpl;

    @GetMapping("/search")
    public SearchResponse searchProducts(@RequestParam String key_word,
                                         @RequestParam Integer city_code) {
        return companyServiceImpl.searchProducts(key_word, city_code);
    }
}
