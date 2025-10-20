package com.izgodno.server.mapper;

import com.izgodno.server.dtos.KauflandDto;
import com.izgodno.server.entities.Kaufland;

public class KauflandDtoMapper {
    public static KauflandDto mapToKauflandDto(Kaufland kaufland) {
        double dis_p = (kaufland.getRetail_price() - kaufland.getPromotion_price()) * 100 / kaufland.getRetail_price();

        return new KauflandDto(
            kaufland.getId(),
            kaufland.getPlace(),
            kaufland.getProduct_name(),
            kaufland.getPromotion_price(),
            kaufland.getRetail_price(),
            (int) dis_p
        );
    }
}
