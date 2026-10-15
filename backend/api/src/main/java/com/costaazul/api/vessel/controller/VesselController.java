package com.costaazul.api.vessel.controller;

import com.costaazul.api.vessel.dto.VesselRequestDTO;
import com.costaazul.api.vessel.dto.VesselResponseDTO;
import com.costaazul.api.vessel.service.VesselService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/erp/vessels")
@Tag(name = "Embarcações (ERP)", description = "Endpoints para cadastro e gestão da frota de navios da Costa Azul")
public class VesselController {

    private final VesselService vesselService;

    public VesselController(VesselService vesselService) {
        this.vesselService = vesselService;
    }

    @PostMapping
    @Operation(summary = "Cadastrar nova embarcação", description = "Registra um novo navio com todas as 5 seções técnicas e metadados de documentação.")
    public ResponseEntity<VesselResponseDTO> createVessel(@RequestBody VesselRequestDTO requestDTO) {
        VesselResponseDTO response = vesselService.createVessel(requestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    @Operation(summary = "Listar embarcações", description = "Retorna a lista de todos os navios cadastrados na companhia.")
    public ResponseEntity<List<VesselResponseDTO>> listVessels() {
        return ResponseEntity.ok(vesselService.listAllVessels());
    }
}