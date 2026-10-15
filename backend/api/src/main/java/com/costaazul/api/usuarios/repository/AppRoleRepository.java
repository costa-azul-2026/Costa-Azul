package com.costaazul.api.usuarios.repository;

import com.costaazul.api.usuarios.domain.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface AppRoleRepository extends JpaRepository<AppRole, UUID> {

    Optional<AppRole> findByRoleName(String roleName);
}