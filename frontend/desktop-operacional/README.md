# Costa Azul Desktop

Sistema de gestão para companhias de cruzeiros e tripulação.

## Pré-requisitos

- [Flutter SDK](https://flutter.dev/docs/get-started/install) 3.x ou superior
- [Git](https://git-scm.com)
- VS Code com extensão Flutter instalada

## Instalação

**1. Clone o repositório**
```bash
git clone https://github.com/costa-azul-2026/costa-azul-desktop.git
cd costa-azul-desktop
```

**2. Instale as dependências**
```bash
flutter pub get
```

**3. Rode o projeto**

No Chrome:
```bash
flutter run -d chrome
```

No Windows:
```bash
flutter run -d windows
```

## Estrutura do projeto

```
lib/
  main.dart              → inicialização do app
  app.dart               → configuração global
  features/
    login/               → tela de acesso ao sistema
    companhia/           → área de gestão da companhia
    tripulacao/          → área da tripulação
  shared/
    widgets/             → componentes reutilizáveis
```
