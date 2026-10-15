package com.costaazul.api.vessel.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.UUID;

public record VesselResponseDTO(
        UUID idVessel,
        UUID idCompany,
        String companyName, // Preenche o "campo automático - nome da empresa"
        String vesselName,
        String nationalRegistrationNumber,
        String flag,
        String imoNumber,
        String photoUrl,
        Short yearBuilt,
        String shipyard,
        BigDecimal grossTonnage,
        BigDecimal deadweightTonnage,
        BigDecimal lengthOverall,
        BigDecimal maxBeam,
        BigDecimal operatingDraft,
        BigDecimal maxServiceSpeed,
        String mainPropulsion,
        Integer maxPassengerCapacity,
        Integer maxCrewCapacity,
        Integer lifeboatTotalCapacity,
        String classificationSociety,
        String ismCertification,
        LocalDate certificateExpiryDate,
        String operationalStatus,
        UUID idHomePort,
        String mainTerminal,
        UUID idManager,
        String operationalEmail,
        // Campos automáticos do Figma
        Long deckCount,
        Long cabinCount,
        Long totalAreas,
        OffsetDateTime createdAt
) {}