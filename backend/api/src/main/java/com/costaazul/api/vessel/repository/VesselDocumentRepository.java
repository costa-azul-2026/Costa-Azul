package com.costaazul.api.vessel.repository;

import com.costaazul.api.vessel.domain.VesselDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface VesselDocumentRepository extends JpaRepository<VesselDocument, UUID> {
    List<VesselDocument> findByVesselIdVessel(UUID idVessel);
}