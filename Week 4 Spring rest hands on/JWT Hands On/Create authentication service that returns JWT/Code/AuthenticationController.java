package com.cognizant.auth_service.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import java.security.Key;
import java.util.Base64;
import java.util.Date;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);
    private static final Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256); // ✅ Secure key

    @GetMapping("/authenticate")
    public String authenticate(HttpServletRequest request) {
        LOGGER.info("Start of /authenticate");

        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            try {
                String base64Credentials = authHeader.substring("Basic ".length());
                String credentials = new String(Base64.getDecoder().decode(base64Credentials));

                if (!credentials.contains(":")) {
                    return "{\"error\": \"Malformed credentials\"}";
                }

                String[] userDetails = credentials.split(":", 2);
                String username = userDetails[0];

                String token = Jwts.builder()
                        .setSubject(username)
                        .setIssuedAt(new Date())
                        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                        .signWith(SECRET_KEY)
                        .compact();

                LOGGER.info("End of /authenticate");
                return "{\"token\":\"" + token + "\"}";
            } catch (Exception e) {
                LOGGER.error("Error during authentication", e);
                return "{\"error\": \"Exception: " + e.getMessage() + "\"}";
            }
        }

        return "{\"error\": \"Missing or invalid Authorization header\"}";
    }
}
