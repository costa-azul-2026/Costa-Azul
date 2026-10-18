
# Costa-Azul

<p align="center">
    <img alt="Logo Costa Azul" src="docs/imagens/logo-costa-azul.svg">
</p>

<p align="center">
    <strong>Digitalizando sua jornada marítima.</strong>
</p>

---

## Descrição

O **Costa Azul** é uma plataforma digital desenvolvida para integrar as principais entidades do ecossistema de um cruzeiro: passageiros, tripulação e companhia.

O projeto é dividido em duas plataformas:

- **Aplicativo Mobile:** destinado aos passageiros;
- **Aplicativo Desktop:** destinado às operações internas, dividido entre os módulos de Tripulação e Companhia.

A solução busca centralizar informações, automatizar processos e facilitar a gestão das operações de um cruzeiro.

---

## Tecnologias

### Mobile
- Flutter
- Dart

### Desktop
- React
- TypeScript
- Vite
- PrimeReact
- Tailwind CSS
- Axios

### Backend
- Java
- Spring Boot
- Spring Security
- JWT
- Spring Data JPA
- Hibernate
- Maven

### Banco e infraestrutura
- PostgreSQL
- Docker

### Ferramentas
- Git
- GitHub
- Figma
- Visual Studio Code
- IntelliJ IDEA

---

## Estrutura

```text
Costa-Azul/
├── backend/
│   └── api/
├── frontend/
│   ├── mobile/
│   └── desktop-operacional/
├── database/
│   └── scripts/
├── docs/
│   └── imagens/
└── README.md
```

- `backend/api`: API e regras de negócio.
- `frontend/mobile`: aplicativo dos passageiros.
- `frontend/desktop-operacional`: aplicação dos módulos de Tripulação e Companhia.
- `database/scripts`: scripts SQL.
- `docs`: documentação e recursos do projeto.



# Como executar o projeto

## 1. Pré-requisitos

- Git
- Node.js
- Java 25
- Flutter
- Docker Desktop

O backend utiliza o Maven Wrapper, portanto não é necessário instalar o Maven separadamente.

## 2. Clonar o projeto

```bash
git clone <URL_DO_REPOSITORIO>
cd Costa-Azul
```

## 3. Banco de dados

Caso o container já exista:

```bash
docker start costaazul-postgres
```

Caso ainda não exista, no Windows PowerShell:

```powershell
docker run --name costaazul-postgres `
  -e POSTGRES_DB=costa_azul `
  -e POSTGRES_USER=postgres `
  -e POSTGRES_PASSWORD=postgres `
  -p 5432:5432 `
  -d postgres:17
```

O PostgreSQL será executado na porta `5432`.

Os scripts SQL serão adicionados posteriormente em `database/scripts`.

## 4. Backend

```bash
cd backend/api
```

Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

Linux/macOS:

```bash
./mvnw spring-boot:run
```

Backend:

`http://localhost:8080`

Swagger:

`http://localhost:8080/swagger-ui/index.html`

## 5. Usuário de desenvolvimento

O backend cria automaticamente o usuário administrativo caso ele ainda não exista.

```text
E-mail: admin@costaazul.com
Senha: CostaAzul@2026
Perfil: SUPER_ADMIN
```

Essa conta é destinada ao ambiente de desenvolvimento e testes.

## 6. Desktop

Em outro terminal:

```bash
cd frontend/desktop-operacional
npm install
npm run dev
```

Aplicação:

`http://localhost:5173`


## 8. Ordem de execução

```text
PostgreSQL
    ↓
Backend — http://localhost:8080
    ↓
Desktop — http://localhost:5173
    ↓
---



## Status

O **Costa Azul encontra-se em desenvolvimento**.

O projeto já possui integração entre frontend, backend e banco de dados, autenticação JWT e funcionalidades relacionadas ao gerenciamento das operações da companhia.

Novas funcionalidades e regras de negócio serão implementadas conforme a evolução do projeto.
```