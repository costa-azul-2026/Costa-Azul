package com.costaazul.api.usuarios.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "app_role", schema = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class AppRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_role", updatable = false, nullable = false)
    @EqualsAndHashCode.Include
    private Integer idRole;

    @Column(name = "role_name", nullable = false, unique = true, length = 50)
    private String roleName;

    @Column(length = 255)
    private String description;
}