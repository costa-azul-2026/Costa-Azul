package com.costaazul.api.vessel.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.UUID;

    @Entity
    @Table(name = "company", schema = "vessel")
    @Getter
    @Setter
    @NoArgsConstructor
    public class Company {

        @Id
        @GeneratedValue(strategy = GenerationType.UUID)
        @Column(name = "id_company")
        private UUID idCompany;

        @Column(name = "company_name", nullable = false, length = 150)
        private String companyName;

        @Column(name = "tax_id", unique = true, length = 30)
        private String taxId;

        @Column(name = "latitude", precision = 9, scale = 6)
        private BigDecimal latitude;

        @Column(name = "longitude", precision = 9, scale = 6)
        private BigDecimal longitude;

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
        }

        @PreUpdate
        protected void onUpdate() {
            this.updatedAt = OffsetDateTime.now();
        }
    }
