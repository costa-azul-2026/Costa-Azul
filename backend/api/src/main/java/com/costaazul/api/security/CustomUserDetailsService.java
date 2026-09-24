package com.costaazul.api.security;

import com.costaazul.api.usuarios.domain.Usuario;
import com.costaazul.api.usuarios.repository.UserRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository usuarioRepository;

    public CustomUserDetailsService(UserRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String credencial) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByCredencial(credencial)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));

        // Spring Security exige "ROLE_" para validar o RBAC
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + usuario.getRole().name());

        return new User(
                usuario.getCredencial(),
                usuario.getSenha(),
                Collections.singletonList(authority)
        );
    }
}