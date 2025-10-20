package com.izgodno.server.services;

import java.util.List;
import java.util.Map;

public interface CompanyService {
    public Map<String, List<?>> search(String key_word, String city_name);
}
