package com.izgodno.server.dtos;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductsResponse {
    private String keyword;
    private Integer page;
    private Integer page_size;
    private Map<String, Long> total;
    private Map<String, Object> items;
}
