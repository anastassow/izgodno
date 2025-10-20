package com.izgodno.server.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.izgodno.server.dtos.ProductsResponse;
import com.izgodno.server.services.CompanyServiceImpl;


@RestController
@RequestMapping("api/products")
public class CompanyController {
    
    @Autowired
    private CompanyServiceImpl companyServiceImpl;

    @GetMapping("/search")
    public ProductsResponse searchProducts(
            @RequestParam String keyword,
            @RequestParam Integer cityCode,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        return companyServiceImpl.searchProducts(keyword, cityCode, page, size);
    }
}
