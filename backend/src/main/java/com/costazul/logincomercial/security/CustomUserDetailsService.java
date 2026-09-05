package com.costazul.logincomercial.security;

import com.costazul.logincomercial.model.Usuario;
import com.costazul.logincomercial.repository.UsuarioRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public CustomUserDetailsService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String numeroRegistro) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByNumeroRegistro(numeroRegistro)
                .orElseThrow(() -> new UsernameNotFoundException("Número de registro não encontrado: " + numeroRegistro));

        // Converte a classe Usuario para o formato que o Spring Security entende
        return User.builder()
                .username(usuario.getNumeroRegistro())
                .password(usuario.getSenha())
                .roles("USER") // Regra de acesso
                .build();
    }
}
