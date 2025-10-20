package com.izgodno.server.dtos;

import lombok.Data;
import java.util.List;
import java.util.Map;

@Data
public class MicroserviceResponse {
    private String keyword;
    private Integer page;
    private Integer page_size;
    private Map<String, List<MicroItem>> items;

    @Data
    public static class MicroItem {
        private Long id;
        private String product_name;
    }
}

