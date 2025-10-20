package com.izgodno.server.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LidlDto {
    private Long id;
    private String place;
    private String product_name;
    private Double promotion_price;
    private Double retail_price;
    private Integer discount_percentage;
}
