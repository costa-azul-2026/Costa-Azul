package com.costaazul.api.usuarios.infrastructure;

import com.costaazul.api.usuarios.domain.Account;
import com.costaazul.api.usuarios.domain.AppRole;
import com.costaazul.api.usuarios.domain.UserRole;
import com.costaazul.api.usuarios.repository.AccountRepository;
import com.costaazul.api.usuarios.repository.AppRoleRepository;
import com.costaazul.api.usuarios.repository.UserRoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminSeeder implements CommandLineRunner {

    private final AccountRepository accountRepository;
    private final AppRoleRepository appRoleRepository;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminSeeder(AccountRepository accountRepository, AppRoleRepository appRoleRepository,
                       UserRoleRepository userRoleRepository, PasswordEncoder passwordEncoder) {
        this.accountRepository = accountRepository;
        this.appRoleRepository = appRoleRepository;
        this.userRoleRepository = userRoleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // 1. Garante que a Role SUPER_ADMIN exista no banco
        AppRole superAdminRole = appRoleRepository.findByRoleName("SUPER_ADMIN")
                .orElseGet(() -> {
                    AppRole newRole = new AppRole();
                    newRole.setRoleName("SUPER_ADMIN");
                    newRole.setDescription("Administrador Geral do Sistema");
                    return appRoleRepository.save(newRole);
                });

        // 2. Verifica se a conta já existe pelo e-mail
        if (accountRepository.findByEmail("admin@costaazul.com").isEmpty()) {

            // 3. Cria a conta base
            Account admin = new Account();
            admin.setName("Administrador Costa Azul");
            admin.setEmail("admin@costaazul.com");
            admin.setPassword(passwordEncoder.encode("CostaAzul@2026"));

            Account savedAdmin = accountRepository.save(admin);

            // 4. Cria a ponte (UserRole) vinculando a conta à permissão
            UserRole userRole = new UserRole();
            userRole.setAccount(savedAdmin);
            userRole.setAppRole(superAdminRole);
            userRoleRepository.save(userRole);

            System.out.println("✅ Usuário SUPER_ADMIN injetado com sucesso no banco de dados.");
        }
    }
}