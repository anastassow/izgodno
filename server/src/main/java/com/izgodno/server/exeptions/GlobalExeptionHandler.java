package com.izgodno.server.exeptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExeptionHandler {

    @ExceptionHandler(ErrorExeption.class)
    public ResponseEntity<Map<String, Object>> ErrorExeptionHandler(ErrorExeption ex) {

        Map<String, Object> response = new HashMap<>();
        response.put("error", ex.getMessage());

        return new ResponseEntity<>(response, ex.getStatus());
    }

}
