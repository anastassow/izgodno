package com.izgodno.server;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.izgodno.server.services.CsvSaveService;
import com.izgodno.server.services.CsvUrlExtractService;

// implements CommandLineRunner
@SpringBootApplication
public class ServerApplication{

	// @Autowired
	// private CsvSaveService csvSaveService;

	// @Autowired
	// private CsvUrlExtractService csvUrlExtractService;
	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

    // @Override
    // public void run(String... args) throws Exception {
		// LocalDate date_now = LocalDate.now();
		// csvUrlExtractService.csvUrl(date_now, 2);
    // }


	// 
	// @Override
    // public void run(String... args) throws Exception {
    //     LocalDate date_now = LocalDate.now();
	// 	String csvUrl1 = "https://kolkostruva.bg" + csvUrlExtractService.csvUrl(date_now, 5);
	// 	String csvUrl2 = "https://kolkostruva.bg" + csvUrlExtractService.csvUrl(date_now, 2);
	// 	String csvUrl3 = "https://kolkostruva.bg" + csvUrlExtractService.csvUrl(date_now, 12);

	// 	// System.out.println(csvUrl2);
	// 	// System.out.println(csvUrl3);
		
    //     csvSaveService.importCsvFromUrl(csvUrl1, "INSERT INTO billa (city_code, place, product_name, retail_price, promotion_price) VALUES (?, ?, ?, ?, ?)");
    //     csvSaveService.importCsvFromUrl(csvUrl2, "INSERT INTO lidl (city_code, place, product_name, retail_price, promotion_price) VALUES (?, ?, ?, ?, ?)");
    //     csvSaveService.importCsvFromUrl(csvUrl3, "INSERT INTO kaufland (city_code, place, product_name, retail_price, promotion_price) VALUES (?, ?, ?, ?, ?)");
    // }

	
}
