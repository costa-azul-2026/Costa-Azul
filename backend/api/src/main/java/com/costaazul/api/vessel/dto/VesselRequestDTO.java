package com.costaazul.api.vessel.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public record VesselRequestDTO(
        // Opcional no envio: se vier nulo, pegamos a companhia padrão "Costa Azul"
        UUID idCompany,

        // Seção 1 - Informações Básicas
        String vesselName,
        String nationalRegistrationNumber,
        String flag,
        String imoNumber,
        String photoUrl,
        Short yearBuilt,

        // Seção 2 - Especificações Técnicas e Dimensões
        String shipyard,
        BigDecimal grossTonnage,
        BigDecimal deadweightTonnage,
        BigDecimal lengthOverall,
        BigDecimal maxBeam,
        BigDecimal operatingDraft,
        BigDecimal maxServiceSpeed,
        String mainPropulsion,

        // Seção 3 - Capacidade & Acomodação
        Integer maxPassengerCapacity,
        Integer maxCrewCapacity,
        Integer lifeboatTotalCapacity,

        // Seção 4 - Certificações e Conformidade
        String classificationSociety,
        String ismCertification,
        LocalDate certificateExpiryDate,
        String operationalStatus, // ACTIVE, INACTIVE, MAINTENANCE, DRY_DOCK

        // Seção 5 - Base Operacional & Gestão
        UUID idHomePort,
        String mainTerminal,
        UUID idManager,
        String operationalEmail,

        // Documentação Técnica (Lista de metadados de arquivos anexados)
        List<DocumentDTO> documents
) {
    public record DocumentDTO(
            String documentType,
            String fileName,
            String fileUrl,
            String mimeType,
            Long fileSizeBytes
    ) {}
}