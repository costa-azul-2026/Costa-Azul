package com.costaazul.api.usuarios.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "account", schema = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_user", updatable = false, nullable = false)
    @EqualsAndHashCode.Include // Diz ao Lombok para usar apenas o ID para comparar contas
    private UUID idUser;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(nullable = false, length = 150, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "document_type", length = 30)
    private String documentType;

    @Column(name = "document_number", length = 50)
    private String documentNumber;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(length = 80)
    private String nationality;

    @Column(length = 30)
    private String gender;

    @Column(name = "account_status", length = 30)
    private String accountStatus;

    @Column(name = "profile_photo", length = 500)
    private String profilePhoto;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    // Importe java.util.Set e java.util.HashSet no topo do ficheiro, se necessário
    @OneToMany(mappedBy = "account", fetch = FetchType.EAGER)
    private java.util.Set<UserRole> roles = new java.util.HashSet<>();
}