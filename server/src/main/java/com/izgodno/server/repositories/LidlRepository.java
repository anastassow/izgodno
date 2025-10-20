package com.izgodno.server.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.izgodno.server.entities.Lidl;

@Repository
public interface LidlRepository extends JpaRepository<Lidl, Long>{
    @Query("SELECT k FROM Lidl k WHERE k.city_code = :cityCode AND LOWER(k.product_name) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Lidl> searchByKeywordAndCity(@Param("keyword") String keyword, @Param("cityCode") Integer cityCode);
}