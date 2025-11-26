# LIDES

<h2 align="center">
    Em desenvolvimento... :pencil2: :zap:
</h2>

## Sobre o Projeto

<p align="justify">
  projeto de home page para links de redirecionamento do lides
</p>

### Features

- [ ] Home page

## Preparando Ambiente de Desenvolvimento

<p align="justify">
 Para garantir um ambiente de trabalho adequado e eficiente para o desenvolvimento é necessário realizar algumas instalações e configurações iniciais.
</p>

### Pré-Requisitos
* Instalação NodeJS. Fundamental para aplicações React.

<p align="justify">
  Com o Node.js instalado, veja os passos abaixo para configurar e executar o projeto:
</p>

**Instalar dependências**

```bash
  npm install
```

**Executar em modo de desenvolvimento**

```bash
  npm run dev
```

**Gerar build para produção**

```bash
  npm run build
```

## 📁 Estrutura de pastas e

```bash
src/
  │
  ├── api/                # Conexões com o servidor
  ├── assets/             # Imagens, ícones, fontes, SVGs
  ├── components/         # Componentes reutilizáveis
  │   ├── layout/         # Componentes de layout (Sidebar, Toast, etc.)
  │   └── ui/             # Componentes de UI (Botões, Inputs, etc.)
  │       └── ui/button   # exemplo de componente, pasta com index.tsx (estrutura) e style.css (estilos)
  │       └── ui/index.ts # unificação da exportação dos componentes
  ├── config/             # Configurações adicionais
  ├── locales/            # Texto em diferentes linguagens
  ├── pages/              # Páginas da aplicação
  ├── redux/              # Gerenciamento de estados globais da aplicação
  ├── routes/             # Arquivos de rotas
  ├── types/              # Tipos reutilizados na aplicação
  ├── utils/              # Funções reutilizadas na aplicação
  └── main.tsx            # Arquivo de entrada
```


### BreakPoints

Este projeto utiliza mobile first, ou seja, os estilos são aplicados inicialmente para telas menores e ajustados progressivamente para telas maiores.

```css
  /* Tablet pequeno ou maior */
  @media (min-width: 480px) { ... }

  /* Tablet grande ou maior */
  @media (min-width: 768px) { ... }

  /* Notebook ou maior */
  @media (min-width: 992px) { ... }

  /* Desktop ou maior */
  @media (min-width: 1200px) { ... }
```