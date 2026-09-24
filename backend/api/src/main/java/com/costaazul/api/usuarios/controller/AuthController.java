package com.costaazul.api.usuarios.controller;

import com.costaazul.api.usuarios.dto.LoginRequest;
import com.costaazul.api.usuarios.dto.TokenResponse;
import com.costaazul.api.usuarios.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest request) {
        TokenResponse response = authService.autenticar(request);
        return ResponseEntity.ok(response);
    }
}