package com.izgodno.server.mapper;
import com.izgodno.server.dtos.LidlDto;
import com.izgodno.server.entities.Lidl;

public class LidlDtoMapper {
    public static LidlDto mapToBillaDto(Lidl lidl) {
        return new LidlDto(
            lidl.getId(),
            lidl.getPlace(),
            lidl.getProduct_name(),
            lidl.getPromotion_price(),
            lidl.getRetail_price()
        );
    }
}
