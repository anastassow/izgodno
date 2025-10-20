package com.izgodno.server.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.izgodno.server.dtos.BillaDto;
import com.izgodno.server.dtos.KauflandDto;
import com.izgodno.server.dtos.LidlDto;
import com.izgodno.server.dtos.MicroserviceResponse;
import com.izgodno.server.dtos.ProductsResponse;
import com.izgodno.server.entities.Billa;
import com.izgodno.server.entities.Kaufland;
import com.izgodno.server.entities.Lidl;
import com.izgodno.server.mapper.BillaDtoMapper;
import com.izgodno.server.mapper.KauflandDtoMapper;
import com.izgodno.server.mapper.LidlDtoMapper;
import com.izgodno.server.repositories.BillaRepository;
import com.izgodno.server.repositories.KauflandRepository;
import com.izgodno.server.repositories.LidlRepository;


@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private KauflandRepository kauflandRepository;

    @Autowired
    private BillaRepository billaRepository;

    @Autowired
    private LidlRepository lidlRepository;

    @Value("${fastapi.microcervice.url}")
    private String microserviceUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    public ProductsResponse searchProducts(String keyword, Integer cityCode, int page, int size) {
        PageRequest pageable = PageRequest.of(page, size);

        List<Kaufland> kauflandProducts = kauflandRepository.searchByKeywordAndCity(keyword, cityCode, pageable).getContent();
        List<Lidl> lidlProducts = lidlRepository.searchByKeywordAndCity(keyword, cityCode, pageable).getContent();
        List<Billa> billaProducts = billaRepository.searchByKeywordAndCity(keyword, cityCode, pageable).getContent();

        Map<String, List<Map<String, Object>>> itemsForMicroservice = new HashMap<>();
        itemsForMicroservice.put("Kaufland", kauflandProducts.stream().map(p -> {
            Map<String, Object> m = new HashMap<>();
            m.put("id", p.getId());
            m.put("product_name", p.getProduct_name());
            return m;
        }).toList());

        itemsForMicroservice.put("Lidl", lidlProducts.stream().map(p -> {
            Map<String, Object> m = new HashMap<>();
            m.put("id", p.getId());
            m.put("product_name", p.getProduct_name());
            return m;
        }).toList());

        itemsForMicroservice.put("Billa", billaProducts.stream().map(p -> {
            Map<String, Object> m = new HashMap<>();
            m.put("id", p.getId());
            m.put("product_name", p.getProduct_name());
            return m;
        }).toList());

        Map<String, Object> microRequest = new HashMap<>();
        microRequest.put("keyword", keyword);
        microRequest.put("page", page);
        microRequest.put("page_size", size);

        Map<String, Long> totals = Map.of(
            "Kaufland", 0L,
            "Lidl", 0L,
            "Billa", 0L
        );

        microRequest.put("total", totals);
        microRequest.put("items", itemsForMicroservice);

        MicroserviceResponse microResponse = restTemplate.postForObject(
                "http://127.0.0.1:9000/filter/", microRequest, MicroserviceResponse.class
        );

        if (microResponse == null || microResponse.getItems() == null) {
            throw new RuntimeException("Microservice returned empty response");
        }

        Map<String, Object> mappedItems = new HashMap<>();

        if (microResponse.getItems().containsKey("Kaufland")) {
            List<Long> ids = microResponse.getItems().get("Kaufland").stream()
                    .map(MicroserviceResponse.MicroItem::getId)
                    .toList();
            List<KauflandDto> dtos = kauflandProducts.stream()
                    .filter(p -> ids.contains(p.getId()))
                    .map(KauflandDtoMapper::mapToKauflandDto)
                    .toList();
            mappedItems.put("Kaufland", dtos);
        }

        if (microResponse.getItems().containsKey("Lidl")) {
            List<Long> ids = microResponse.getItems().get("Lidl").stream()
                    .map(MicroserviceResponse.MicroItem::getId)
                    .toList();
            List<LidlDto> dtos = lidlProducts.stream()
                    .filter(p -> ids.contains(p.getId()))
                    .map(LidlDtoMapper::mapToLidlDto)
                    .toList();
            mappedItems.put("Lidl", dtos);
        }

        if (microResponse.getItems().containsKey("Billa")) {
            List<Long> ids = microResponse.getItems().get("Billa").stream()
                    .map(MicroserviceResponse.MicroItem::getId)
                    .toList();
            List<BillaDto> dtos = billaProducts.stream()
                    .filter(p -> ids.contains(p.getId()))
                    .map(BillaDtoMapper::mapToBillaDto)
                    .toList();
            mappedItems.put("Billa", dtos);
        }

        return new ProductsResponse(
                microResponse.getKeyword(),
                microResponse.getPage(),
                microResponse.getPage_size(),
                totals,
                mappedItems
        );
    }
}
