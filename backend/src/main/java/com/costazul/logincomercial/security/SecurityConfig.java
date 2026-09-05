package com.costazul.logincomercial.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable) // Desabilitado apenas para facilitar testes locais via Postman/Insomnia
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/registro", "/h2-console/**").permitAll() // Rotas públicas
                        .anyRequest().authenticated() // Qualquer outra rota exige login
                )
                .headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::disable)) // Necessário para o H2 Console funcionar no navegador
                .httpBasic(Customizer.withDefaults()); // Utiliza Basic Auth para testes

        return http.build();
    }

    // Configura o algoritmo BCrypt para criptografar as senhas no banco
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}