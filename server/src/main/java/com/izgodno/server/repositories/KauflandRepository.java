package com.izgodno.server.repositories;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.izgodno.server.entities.Kaufland;

@Repository
public interface KauflandRepository extends JpaRepository<Kaufland, Long>{
    @Query("SELECT k FROM Kaufland k WHERE k.city_code = :cityCode AND LOWER(k.product_name) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    Page<Kaufland> searchByKeywordAndCity(@Param("keyword") String keyword, @Param("cityCode") Integer cityCode, Pageable pageable);
}