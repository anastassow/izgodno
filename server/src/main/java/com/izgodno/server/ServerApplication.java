package com.izgodno.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// implements CommandLineRunner
@SpringBootApplication
public class ServerApplication{

	// @Autowired
	// private CsvSaveService csvSaveService;
	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	// @Override
    // public void run(String... args) throws Exception {
    //     String csvUrl = "https://kolkostruva.bg/upload/2569/import.csv";

    //     csvSaveService.importCsvFromUrl(csvUrl);
    // }

}
