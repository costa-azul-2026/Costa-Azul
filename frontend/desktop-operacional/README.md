# Costa Azul — Frontend Desktop

Sistema de gestão para companhias de cruzeiros e tripulação, desenvolvido em React + TypeScript.

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS


## Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org) versão 18 ou superior
- npm (já vem junto com o Node)

Para verificar se já tem instalado:
```bash
node -v
npm -v
```

## Instalação

**1. Clone o repositório**
```bash
git clone https://github.com/costa-azul-2026/Costa-Azul.git
cd Costa-Azul/frontend/desktop-operacional
```

**2. Instale as dependências**
```bash
npm install
```

**3. Rode o projeto**
```bash
npm run dev
```

Acesse no navegador: `http://localhost:5173`

## Estrutura do projeto

```
src/
  main.tsx              → inicialização do app
  App.tsx               → configuração global
  index.css             → biblioteca de estilo
  features/
    login/              → tela de acesso ao sistema
    companhia/          → área de gestão da companhia
    tripulantes/        → área da tripulação
```

## Contexto

O Costa Azul é um sistema de gestão voltado para companhias de cruzeiros, centralizando informações sobre navios, tripulação, viagens, financeiro e operações em uma única plataforma.