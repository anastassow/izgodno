package com.izgodno.server.services;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.apache.http.client.utils.URIBuilder;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;



@Service
public class CsvUrlExtractService {
    
    @Value("${kolkostruva.url}")
    String url;

    public String csvUrl() {

        HttpClient client = HttpClient.newHttpClient();

        try {
            URI uri = new URIBuilder(url)
                .addParameter("date", "2025-10-20")
                .addParameter("account", "2")
                .build();

            HttpRequest request = HttpRequest.newBuilder()
            .uri(uri)
            .header("Content-Type", "application/json")
            .GET()
            .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            Document doc = Jsoup.parse(response.body());

            Element link = doc.selectFirst("a[data-type=csv]");
            String csvPath = link.attr("href");
            System.out.println(csvPath);
        } catch (Exception e) {
            System.out.println("There is an error with the uri");
        }

        return "";
    }

}
