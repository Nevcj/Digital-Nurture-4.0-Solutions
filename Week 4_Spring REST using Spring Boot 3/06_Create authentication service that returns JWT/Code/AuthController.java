package com.example.jwt.controller;

import com.example.jwt.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.*;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String[] credentials = extractCredentials(authHeader);
            String username = credentials[0];
            String password = credentials[1];

            if ("user".equals(username) && "pwd".equals(password)) {
                String token = jwtUtil.generateToken(username);
                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                return ResponseEntity.ok(response);
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    private String[] extractCredentials(String authHeader) {
        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] decoded = Base64.getDecoder().decode(base64Credentials);
        String decodedString = new String(decoded, StandardCharsets.UTF_8);
        return decodedString.split(":", 2);
    }
}
