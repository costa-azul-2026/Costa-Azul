package com.costaazul.api.vessel.service;

import com.costaazul.api.vessel.domain.Company;
import com.costaazul.api.vessel.domain.Vessel;
import com.costaazul.api.vessel.domain.VesselDocument;
import com.costaazul.api.vessel.dto.VesselRequestDTO;
import com.costaazul.api.vessel.dto.VesselResponseDTO;
import com.costaazul.api.vessel.repository.CompanyRepository;
import com.costaazul.api.vessel.repository.VesselDocumentRepository;
import com.costaazul.api.vessel.repository.VesselRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class VesselService {

    private final VesselRepository vesselRepository;
    private final CompanyRepository companyRepository;
    private final VesselDocumentRepository documentRepository;

    public VesselService(VesselRepository vesselRepository,
                         CompanyRepository companyRepository,
                         VesselDocumentRepository documentRepository) {
        this.vesselRepository = vesselRepository;
        this.companyRepository = companyRepository;
        this.documentRepository = documentRepository;
    }

    @Transactional
    public VesselResponseDTO createVessel(VesselRequestDTO dto) {
        if (vesselRepository.existsByImoNumber(dto.imoNumber())) {
            throw new IllegalArgumentException("Já existe uma embarcação cadastrada com este número IMO.");
        }
        if (vesselRepository.existsByNationalRegistrationNumber(dto.nationalRegistrationNumber())) {
            throw new IllegalArgumentException("Já existe uma embarcação com este Número de Registro Nacional.");
        }

        // Busca a empresa pelo ID enviado ou cria/recupera a "Costa Azul" automaticamente
        Company company = (dto.idCompany() != null)
                ? companyRepository.findById(dto.idCompany())
                .orElseThrow(() -> new IllegalArgumentException("Empresa responsável não encontrada."))
                : companyRepository.findByCompanyName("Costa Azul Cruzeiros")
                .orElseGet(() -> {
                    Company defaultCompany = new Company();
                    defaultCompany.setCompanyName("Costa Azul Cruzeiros");
                    defaultCompany.setTaxId("00.000.000/0001-00");
                    return companyRepository.save(defaultCompany);
                });

        Vessel vessel = new Vessel();
        vessel.setCompany(company);
        vessel.setVesselName(dto.vesselName());
        vessel.setNationalRegistrationNumber(dto.nationalRegistrationNumber());
        vessel.setFlag(dto.flag());
        vessel.setImoNumber(dto.imoNumber());
        vessel.setPhotoUrl(dto.photoUrl());
        vessel.setYearBuilt(dto.yearBuilt());
        vessel.setShipyard(dto.shipyard());
        vessel.setGrossTonnage(dto.grossTonnage());
        vessel.setDeadweightTonnage(dto.deadweightTonnage());
        vessel.setLengthOverall(dto.lengthOverall());
        vessel.setMaxBeam(dto.maxBeam());
        vessel.setOperatingDraft(dto.operatingDraft());
        vessel.setMaxServiceSpeed(dto.maxServiceSpeed());
        vessel.setMainPropulsion(dto.mainPropulsion());
        vessel.setMaxPassengerCapacity(dto.maxPassengerCapacity());
        vessel.setMaxCrewCapacity(dto.maxCrewCapacity());
        vessel.setLifeboatTotalCapacity(dto.lifeboatTotalCapacity());
        vessel.setClassificationSociety(dto.classificationSociety());
        vessel.setIsmCertification(dto.ismCertification());
        vessel.setCertificateExpiryDate(dto.certificateExpiryDate());
        vessel.setOperationalStatus(dto.operationalStatus() != null ? dto.operationalStatus() : "ACTIVE");
        vessel.setIdHomePort(dto.idHomePort());
        vessel.setMainTerminal(dto.mainTerminal());
        vessel.setIdManager(dto.idManager());
        vessel.setOperationalEmail(dto.operationalEmail());

        Vessel savedVessel = vesselRepository.save(vessel);

        // Salva os metadados dos arquivos anexados em "Documentação Técnica"
        if (dto.documents() != null && !dto.documents().isEmpty()) {
            for (VesselRequestDTO.DocumentDTO docDto : dto.documents()) {
                VesselDocument doc = new VesselDocument();
                doc.setVessel(savedVessel);
                doc.setDocumentType(docDto.documentType());
                doc.setFileName(docDto.fileName());
                doc.setFileUrl(docDto.fileUrl());
                doc.setMimeType(docDto.mimeType());
                doc.setFileSizeBytes(docDto.fileSizeBytes());
                documentRepository.save(doc);
            }
        }

        return mapToResponseDTO(savedVessel);
    }

    @Transactional(readOnly = true)
    public List<VesselResponseDTO> listAllVessels() {
        return vesselRepository.findAll()
                .stream()
                .map(this::mapToResponseDTO)
                .toList();
    }

    private VesselResponseDTO mapToResponseDTO(Vessel v) {
        return new VesselResponseDTO(
                v.getIdVessel(),
                v.getCompany().getIdCompany(),
                v.getCompany().getCompanyName(),
                v.getVesselName(),
                v.getNationalRegistrationNumber(),
                v.getFlag(),
                v.getImoNumber(),
                v.getPhotoUrl(),
                v.getYearBuilt(),
                v.getShipyard(),
                v.getGrossTonnage(),
                v.getDeadweightTonnage(),
                v.getLengthOverall(),
                v.getMaxBeam(),
                v.getOperatingDraft(),
                v.getMaxServiceSpeed(),
                v.getMainPropulsion(),
                v.getMaxPassengerCapacity(),
                v.getMaxCrewCapacity(),
                v.getLifeboatTotalCapacity(),
                v.getClassificationSociety(),
                v.getIsmCertification(),
                v.getCertificateExpiryDate(),
                v.getOperationalStatus(),
                v.getIdHomePort(),
                v.getMainTerminal(),
                v.getIdManager(),
                v.getOperationalEmail(),
                0L, // deckCount
                0L, // cabinCount
                0L, // totalAreas
                v.getCreatedAt()
        );
    }
}