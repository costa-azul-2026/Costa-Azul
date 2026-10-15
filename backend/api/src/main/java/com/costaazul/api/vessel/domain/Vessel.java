package com.costaazul.api.vessel.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "vessel", schema = "vessel")
@Getter
@Setter
@NoArgsConstructor
public class Vessel {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_vessel")
    private UUID idVessel;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_company", nullable = false)
    private Company company;

    //Seção 1: Informações Básicas
    @Column(name = "vessel_name", nullable = false, length = 150)
    private String vesselName;

    @Column(name = "national_registration_number", nullable = false, unique = true, length = 150)
    private String nationalRegistrationNumber;

    @Column(name = "flag", nullable = false, length = 150)
    private String flag;

    @Column(name = "imo_number", nullable = false, unique = true, length = 7)
    private String imoNumber;

    @Column(name = "photo_url", length = 500)
    private String photoUrl;

    @Column(name = "year_built", nullable = false)
    private Short yearBuilt; // SMALLINT no Postgres exige Short no Java

    //Seção 2: Especificações Técnicas e Dimensões
    @Column(name = "shipyard", nullable = false, length = 150)
    private String shipyard;

    @Column(name = "gross_tonnage", nullable = false, precision = 10, scale = 2)
    private BigDecimal grossTonnage;

    @Column(name = "deadweight_tonnage", precision = 10, scale = 2)
    private BigDecimal deadweightTonnage;

    @Column(name = "length_overall", nullable = false, precision = 7, scale = 2)
    private BigDecimal lengthOverall;

    @Column(name = "max_beam", precision = 6, scale = 2)
    private BigDecimal maxBeam;

    @Column(name = "operating_draft", precision = 5, scale = 2)
    private BigDecimal operatingDraft;

    @Column(name = "max_service_speed", precision = 4, scale = 1)
    private BigDecimal maxServiceSpeed;

    @Column(name = "main_propulsion", length = 150)
    private String mainPropulsion;

    //Seção 3: Capacidade & Acomodação
    @Column(name = "max_passenger_capacity", nullable = false)
    private Integer maxPassengerCapacity;

    @Column(name = "max_crew_capacity")
    private Integer maxCrewCapacity;

    @Column(name = "lifeboat_total_capacity")
    private Integer lifeboatTotalCapacity;

    //Seção 4: Certificações e Conformidade
    @Column(name = "classification_society", length = 150)
    private String classificationSociety;

    @Column(name = "ism_certification", length = 150)
    private String ismCertification;

    @Column(name = "certificate_expiry_date")
    private LocalDate certificateExpiryDate;

    @Column(name = "operational_status", nullable = false, length = 30)
    private String operationalStatus = "ACTIVE";

    //Seção 5: Base Operacional & Gestão
    @Column(name = "id_home_port")
    private UUID idHomePort;

    @Column(name = "main_terminal", length = 150)
    private String mainTerminal;

    @Column(name = "id_manager")
    private UUID idManager; // Mapeado direto como UUID para desacoplar da entidade Employee por enquanto

    @Column(name = "operational_email", length = 255)
    private String operationalEmail;

    //Auditoria e Controle de Concorrência
    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    @Version
    @Column(name = "version", nullable = false)
    private Integer version = 0;

    @PrePersist
    protected void onCreate() {
        this.createdAt = OffsetDateTime.now();
        this.updatedAt = OffsetDateTime.now();
        if (this.operationalStatus == null) {
            this.operationalStatus = "ACTIVE";
        }
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = OffsetDateTime.now();
    }
}