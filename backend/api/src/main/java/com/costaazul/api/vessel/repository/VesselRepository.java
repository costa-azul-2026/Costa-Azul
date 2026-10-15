package com.costaazul.api.vessel.repository;

import com.costaazul.api.vessel.domain.Vessel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface VesselRepository extends JpaRepository<Vessel, UUID> {
    boolean existsByImoNumber(String imoNumber);
    boolean existsByNationalRegistrationNumber(String nationalRegistrationNumber);
}