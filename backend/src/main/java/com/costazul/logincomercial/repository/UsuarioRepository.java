package com.costazul.logincomercial.repository;
import com.costazul.logincomercial.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // O Spring cria a query SQL automaticamente pelo nome do metodo
    Optional<Usuario> findByNumeroRegistro(String numeroRegistro);
}
