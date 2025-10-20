package com.izgodno.server.services;


import com.izgodno.server.dtos.ProductsResponse;

public interface CompanyService {
    public ProductsResponse searchProducts(String keyword, Integer cityCode, int page, int size);
}
