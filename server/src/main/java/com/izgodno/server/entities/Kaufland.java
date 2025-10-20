package com.izgodno.server.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * This entity represend all the information for the Kaufland products
 */

@Entity
@Table(name = "Kaufland")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Kaufland {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "City code is required")
    @Column(nullable = false)
    private Integer city_code;

    @NotNull(message = "Place us required")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String place;

    @NotNull(message = "Product name required")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String product_name;

    @NotNull(message = "Retail price required")
    @Column(nullable = false)
    private Double retail_price;

    private Double promotion_price;
}
