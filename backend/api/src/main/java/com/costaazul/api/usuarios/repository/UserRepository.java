package com.costaazul.api.usuarios.repository;

import com.costaazul.api.usuarios.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByCredencial(String credencial);

    // Futuramente para a sincronização Offline-First do Flutter
    Optional<Usuario> findByUuid(UUID uuid);
}
