package com.izgodno.server.mapper;

import com.izgodno.server.dtos.BillaDto;
import com.izgodno.server.entities.Billa;

public class BillaDtoMapper {
    public static BillaDto mapToBillaDto(Billa billa) {
        return new BillaDto(
            billa.getId(),
            billa.getPlace(),
            billa.getProduct_name(),
            billa.getPromotion_price(),
            billa.getRetail_price()
        );
    }
}
