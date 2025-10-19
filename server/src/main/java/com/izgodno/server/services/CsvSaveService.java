package com.izgodno.server.services;

import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opencsv.CSVReader;

/**
 * This is a class that have only a one method saving the data from the csv to the db
 * 
 * @param csvUrl this is the url for the csv get from the kolkostruva site
 * @returns nothing it if executed with no problems
 * @throws String with a message for a row skiped if there is a problem with it
 */

@Service
public class CsvSaveService {
    private static final int BATCH_SIZE = 1000;

    @Autowired
    private DataSource dataSource;

    public void importCsvFromUrl(String csvUrl) throws Exception {
        URL url = new URL(csvUrl);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Accept-Charset", "UTF-8");

        try (CSVReader reader = new CSVReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
            Connection db = dataSource.getConnection()) {

            db.setAutoCommit(false);
            String sql = "INSERT INTO billa (city_code, place, product_name, retail_price, promotion_price) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement stmt = db.prepareStatement(sql);

            String[] parts;
            int count = 0;

            reader.readNext();
            while ((parts = reader.readNext()) != null) {
                try {
                    int cityCode = Integer.parseInt(parts[0].trim());
                    String place = parts[1].trim();
                    String productName = parts[2].trim();
                    double retailPrice = parseDoubleSafe(parts[5]);
                    double promoPrice = parseDoubleSafe(parts[6]);

                    stmt.setInt(1, cityCode);
                    stmt.setString(2, place);
                    stmt.setString(3, productName);
                    stmt.setDouble(4, retailPrice);
                    stmt.setDouble(5, promoPrice);
                    stmt.addBatch();

                    if (++count % BATCH_SIZE == 0) {
                        stmt.executeBatch();
                        db.commit();
                    }
                } catch (Exception e) {
                    System.err.println("Skipping line: " + String.join(",", parts));
                }
            }

            stmt.executeBatch();
            db.commit();
            // testing
            // System.out.println("Imported " + count + " records into PostgreSQL!"); 
        }
    }

    private double parseDoubleSafe(String s) {
        try {
            if (s == null || s.isBlank()) return 0.0;
            return Double.parseDouble(s.replace(",", "."));
        } catch (NumberFormatException e) {
            return 0.0;
        }
    }
}
