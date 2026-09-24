package com.costaazul.api.usuarios.domain;

public enum Role {
    SUPER_ADMIN,       // TI e Configurações globais
    ADMIN_COMPANHIA,   // Gestores no ERP web (em terra)
    COMANDANTE,        // Liderança no App Web da Tripulação
    OFICIAL,           // Operacional no App Web da Tripulação
    TRIPULACAO,        // Execução no App Web da Tripulação
    PASSAGEIRO         // Acesso mobile nativo
}
