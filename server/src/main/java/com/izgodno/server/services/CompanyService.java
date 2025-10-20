package com.izgodno.server.services;

import com.izgodno.server.dtos.SearchResponse;

public interface CompanyService {
    public SearchResponse searchProducts(String keyword, Integer cityCode);
}
