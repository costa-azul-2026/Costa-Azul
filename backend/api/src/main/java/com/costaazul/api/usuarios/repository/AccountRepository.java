package com.costaazul.api.usuarios.repository;

import com.costaazul.api.usuarios.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface AccountRepository extends JpaRepository<Account, UUID> {

    // O Spring Data JPA cria a query SQL automaticamente com base no nome do metodo
    Optional<Account> findByEmail(String email);

    // Caso o login possa ser feito pelo número de documento
    Optional<Account> findByDocumentNumber(String documentNumber);
}