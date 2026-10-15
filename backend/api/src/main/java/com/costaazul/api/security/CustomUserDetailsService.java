package com.costaazul.api.security;

import com.costaazul.api.usuarios.domain.Account;
import com.costaazul.api.usuarios.repository.AccountRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final AccountRepository accountRepository;

    public CustomUserDetailsService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // 1 Procura a conta pelo e-mail
        Account account = accountRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Conta não encontrada com o e-mail: " + email));

        // 2 Extrai as roles da base de dados e adiciona o prefixo ROLE_ exigido pelo SpringSecurity
        var authorities = account.getRoles().stream()
                .map(userRole -> new SimpleGrantedAuthority("ROLE_" + userRole.getAppRole().getRoleName()))
                .collect(Collectors.toList());

        // 3 Devolve um utilizador padrão do SpringSecurity pronto para ser validado
        return new User(
                account.getEmail(),
                account.getPassword(),
                authorities
        );
    }
}