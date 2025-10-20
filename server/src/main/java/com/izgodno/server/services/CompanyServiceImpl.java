package com.izgodno.server.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.izgodno.server.dtos.ItemDTO;
import com.izgodno.server.dtos.SearchResponse;
import com.izgodno.server.repositories.BillaRepository;
import com.izgodno.server.repositories.KauflandRepository;
import com.izgodno.server.repositories.LidlRepository;

@Service
public class CompanyServiceImpl implements CompanyService{

    @Autowired
    private KauflandRepository kauflandRepository;

    @Autowired
    private BillaRepository billaRepository;
   
    @Autowired
    private LidlRepository lidlRepository;

    public SearchResponse searchProducts(String keyword, Integer cityCode) {
        Map<String, List<ItemDTO>> items = new HashMap<>();

        // Kaufland
        List<ItemDTO> kauflandItems = new ArrayList<>();
        kauflandRepository.searchByKeywordAndCity(keyword, cityCode)
                .forEach(k -> kauflandItems.add(new ItemDTO(k.getId(), k.getProduct_name())));
        items.put("Kaufland", kauflandItems);

        // Billa
        List<ItemDTO> billaItems = new ArrayList<>();
        billaRepository.searchByKeywordAndCity(keyword, cityCode)
                .forEach(b -> billaItems.add(new ItemDTO(b.getId(), b.getProduct_name())));
        items.put("Billa", billaItems);

        // Lidl
        List<ItemDTO> lidlItems = new ArrayList<>();
        lidlRepository.searchByKeywordAndCity(keyword, cityCode)
                .forEach(l -> lidlItems.add(new ItemDTO(l.getId(), l.getProduct_name())));
        items.put("Lidl", lidlItems);

        return new SearchResponse(keyword, items);
    }
    
}
