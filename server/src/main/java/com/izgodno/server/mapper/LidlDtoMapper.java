package com.izgodno.server.mapper;
import com.izgodno.server.dtos.LidlDto;
import com.izgodno.server.entities.Lidl;

public class LidlDtoMapper {
    public static LidlDto mapToBillaDto(Lidl lidl) {
        double dis_p = (lidl.getRetail_price() - lidl.getPromotion_price()) * 100 / lidl.getRetail_price();
        
        return new LidlDto(
            lidl.getId(),
            lidl.getPlace(),
            lidl.getProduct_name(),
            lidl.getPromotion_price(),
            lidl.getRetail_price(),
            (int) dis_p
        );
    }
}
