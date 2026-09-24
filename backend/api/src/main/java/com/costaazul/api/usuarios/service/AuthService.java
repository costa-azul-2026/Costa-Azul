package com.costaazul.api.usuarios.service;

import com.costaazul.api.security.CustomUserDetailsService;
import com.costaazul.api.security.JwtService;
import com.costaazul.api.usuarios.dto.LoginRequest;
import com.costaazul.api.usuarios.dto.TokenResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final CustomUserDetailsService userDetailsService;

    public AuthService(AuthenticationManager authenticationManager, JwtService jwtService, CustomUserDetailsService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    public TokenResponse autenticar(LoginRequest request) {
        // Valida credencial e senha no banco. Caso falhe ele lança exceção automaticamente
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.credencial(), request.senha())
        );

        UserDetails user = userDetailsService.loadUserByUsername(request.credencial());
        String jwtToken = jwtService.gerarToken(user);

        // Extrai a role (ex: ROLE_SUPER_ADMIN) para devolver ao frontend
        String role = user.getAuthorities().iterator().next().getAuthority();

        return new TokenResponse(jwtToken, role);
    }
}