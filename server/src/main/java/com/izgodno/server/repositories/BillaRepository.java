package com.izgodno.server.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.izgodno.server.entities.Billa;

@Repository
public interface BillaRepository extends JpaRepository<Billa, Long>{  
    @Query("SELECT k FROM Billa k WHERE k.city_code = :cityCode AND LOWER(k.product_name) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Billa> searchByKeywordAndCity(@Param("keyword") String keyword, @Param("cityCode") Integer cityCode);
}
