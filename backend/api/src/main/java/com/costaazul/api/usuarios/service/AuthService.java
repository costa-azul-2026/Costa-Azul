package com.costaazul.api.usuarios.service;

import com.costaazul.api.security.JwtService;
import com.costaazul.api.usuarios.domain.Account;
import com.costaazul.api.usuarios.dto.LoginRequest;
import com.costaazul.api.usuarios.dto.TokenResponse;
import com.costaazul.api.usuarios.repository.AccountRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final AccountRepository accountRepository;

    public AuthService(AuthenticationManager authenticationManager, JwtService jwtService, AccountRepository accountRepository) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.accountRepository = accountRepository;
    }

    public TokenResponse login(LoginRequest request) {
        // 1. O Spring Security valida automaticamente a senha com o que está relacionado ao banco de dados
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getSenha()
                )
        );

        // 2. Buscar os dados completos da conta
        Account account = accountRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Conta não encontrada."));

        // 3. Mandar o serviço de JWT gerar o token
        String jwtToken = jwtService.generateToken(account);

        // 4. Devolver o token empacotado para o controlador enviar ao Frontend
        return new TokenResponse(jwtToken);
    }

    public TokenResponse autenticar(LoginRequest request) {
        // 1. O Spring Security valida a senha informada
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getSenha())
        );

        // 2. Busca os dados completos da conta no banco
        Account account = accountRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Conta não encontrada."));

        // 3. Gera o token JWT
        String jwtToken = jwtService.generateToken(account);

        // 4. Retorna o token (Esta é a linha que resolve o seu erro!)
        return new TokenResponse(jwtToken);
    }
}