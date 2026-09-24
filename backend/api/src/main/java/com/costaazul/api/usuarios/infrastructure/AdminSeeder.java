package com.costaazul.api.usuarios.infrastructure;

import com.costaazul.api.usuarios.domain.Role;
import com.costaazul.api.usuarios.domain.Usuario;
import com.costaazul.api.usuarios.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminSeeder implements CommandLineRunner {

    private final UserRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminSeeder(UserRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // Verifica se já existe um admin no banco para não duplicar
        if (usuarioRepository.findByCredencial("admin@costaazul.com").isEmpty()) {
            Usuario admin = new Usuario();
            admin.setCredencial("admin@costaazul.com");
            // A senha será criptografada pelo BCrypt configurado na Fase 2
            admin.setSenha(passwordEncoder.encode("CostaAzul@2026"));
            admin.setRole(Role.SUPER_ADMIN);

            usuarioRepository.save(admin);
            System.out.println("✅ Usuário SUPER_ADMIN injetado com sucesso no banco de dados.");
        }
    }
}