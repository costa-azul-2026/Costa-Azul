# Costa Azul Backend - Guia de Desenvolvimento (Local)

Este é o repositório backend do sistema **Costa Azul**, desenvolvido em Spring Boot. A arquitetura foi projetada para suportar sincronização offline-first e edge computing em navios de cruzeiro.

## Estado Atual: Fase 3 Segurança JWT e JWT Stateless
O motor de autenticação central foi implementado. O sistema não utiliza e-mail/senha padrão, mas sim uma credencial baseada no **Número de Registro** do tripulante/companhia.

## Como Rodar Localmente

1. **Pré-requisitos:** Java 17+ e Maven instalados.
2. **Setup da IDE:** Abra o projeto no IntelliJ IDEA e aguarde o Maven sincronizar o `pom.xml`.
3. **Execução:** Rode a classe principal `LogincomercialApplication.java` (atalho: `Shift + F10`).
4. **Porta Local:** O servidor iniciará em `http://localhost:8080`.

## Banco de Dados Local (H2)
Para facilitar o desenvolvimento, estamos utilizando o H2 em memória. O banco é resetado a cada reinicialização da aplicação.
- **Acesso:** `http://localhost:8080/h2-console`
- **JDBC URL:** `jdbc:h2:mem:logincomercialdb`

## Notas de Arquitetura para a Equipe
* **Aviso no Console:** A mensagem `WARN` sobre `spring.jpa.open-in-view` e a info `No JTA platform available` são comportamentos esperados do Hibernate no ambiente de testes e não afetam a execução.
* **Segurança:** O `JwtAuthenticationFilter` intercepta todas as rotas da API, exceto `/api/auth/**` e o console do H2. Certifique-se de passar o cabeçalho `Authorization: Bearer <token>` ao testar rotas protegidas no Insomnia/Postman.
* **Próxima Etapa:** Estruturação dos Bounded Contexts (Módulos de Tripulação, Embarcação) e integração com o front-end em React (Painel ERP e Crew).