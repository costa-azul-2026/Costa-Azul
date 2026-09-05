package com.costazul.logincomercial.controller;

import com.costazul.logincomercial.model.Usuario;
import com.costazul.logincomercial.repository.UsuarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AutenticacaoController {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public AutenticacaoController(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Endpoint publico para criar um usuário
    @PostMapping("/registro")
    public ResponseEntity<String> registrarUsuario(@RequestBody Usuario novoUsuario) {
        if (usuarioRepository.findByNumeroRegistro(novoUsuario.getNumeroRegistro()).isPresent()) {
            return ResponseEntity.badRequest().body("Erro: Número de registro já existe!");
        }

        // Criptografia antes de salvar.
        novoUsuario.setSenha(passwordEncoder.encode(novoUsuario.getSenha()));
        usuarioRepository.save(novoUsuario);

        return ResponseEntity.ok("Usuário comercial registrado com sucesso!");
    }

    // Endpoint PRIVADO para testar o login
    @GetMapping("/sistema/painel")
    public ResponseEntity<String> acessarPainel(Authentication authentication) {
        // authentication.getName() vai retornar o número de registro que fez login
        return ResponseEntity.ok("Bem-vindo ao sistema comercial! Logado com o registro: " + authentication.getName());
    }
}
