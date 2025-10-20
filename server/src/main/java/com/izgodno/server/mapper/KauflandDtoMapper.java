package com.izgodno.server.mapper;

import com.izgodno.server.dtos.KauflandDto;
import com.izgodno.server.entities.Kaufland;

public class KauflandDtoMapper {
    public static KauflandDto mapToBillaDto(Kaufland kaufland) {
        return new KauflandDto(
            kaufland.getId(),
            kaufland.getPlace(),
            kaufland.getProduct_name(),
            kaufland.getPromotion_price(),
            kaufland.getRetail_price()
        );
    }
}
