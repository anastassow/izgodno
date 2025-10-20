package com.izgodno.server;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.izgodno.server.services.CsvUrlExtractService;

// implements CommandLineRunner
@SpringBootApplication
public class ServerApplication implements CommandLineRunner{

	// @Autowired
	// private CsvSaveService csvSaveService;

	@Autowired
	private CsvUrlExtractService csvUrlExtractService;
	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

    @Override
    public void run(String... args) throws Exception {
		LocalDate date_now = LocalDate.now();
		csvUrlExtractService.csvUrl(date_now, 1);
    }

	// @Override
    // public void run(String... args) throws Exception {
    //     String csvUrl = "https://kolkostruva.bg/upload/2569/import.csv";

    //     csvSaveService.importCsvFromUrl(csvUrl);
    // }

	
}
