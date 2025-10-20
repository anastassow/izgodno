package com.izgodno.server.services;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDate;

import org.apache.http.client.utils.URIBuilder;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.izgodno.server.exeptions.ErrorExeption; 

@Service
public class CsvUrlExtractService {
    
    @Value("${kolkostruva.url}")
    String url;

    /**
     * Gets the uri for the csv
     * 
     * @param date_now
     * @param account
     * @return String representing the uri for the csv url based on date and account number (food company)
     * @exception ErrorExeption Throws a custom error exeption if something fails in the url development
     */
    public String csvUrl(LocalDate date_now, Integer account) {

        HttpClient client = HttpClient.newHttpClient();

        try {
            URI uri = new URIBuilder(url)
                .addParameter("date", date_now.toString())
                .addParameter("account", account.toString())
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
            return csvPath;
        } catch (Exception e) {
            throw new ErrorExeption("There is an error with the uri", HttpStatus.CONFLICT);
        }

    }

}
