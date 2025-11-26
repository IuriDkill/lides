# 📁 Configuração do Projeto Vite + React + TypeScript

Este guia descreve os passos para configurar um projeto com **Vite**, **React** e **TypeScript**, incluindo suporte para **importação de SVG como componentes React**, e uma estrutura de pastas organizada.

---

## 🧱 1. Criar o repositório

1. Crie um repositório no GitHub.
2. Clone o repositório localmente:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

---

## ⚙️ 2. Inicializar projeto com Vite

Execute:

```bash
npm create vite@latest .
```

Selecione as opções:

- Framework: `React`
- Variant: `TypeScript`

---

## 📦 3. Instalar dependências

Instale as dependências e os tipos do Node.js:

```bash
npm install
npm install vite-plugin-svgr
npm install --save @types/node
```

---

## ⚒️ 4. Configuração do Vite

Edite o arquivo `vite.config.ts` com o seguinte conteúdo:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

---

## 🖼️ 5. Suporte a SVG como componente React

Crie o arquivo `vite-env.d.ts` na pasta src e inclua:

```ts
/// <reference types="vite/client" />

declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
```

Agora, você pode importar SVGs como componentes React:

```tsx
import Logo from '@/assets/logo.svg?react';
```

---

## 📁 6. Estrutura de Pastas Sugerida

```bash
src/
  │
  ├── assets/         # Imagens, ícones, fontes, SVGs
  ├── components/     # Componentes reutilizáveis
  │   ├── layout/     # Componentes de layout (Header, Footer, etc.)
  │   └── ui/         # Componentes de UI (Botões, Inputs, etc.)
  ├── config/         # Configurações adicionais
  ├── locales/        # Texto em diferentes linguagens
  ├── pages/          # Páginas da aplicação
  ├── routes/         # Arquivos de rotas
  └── main.tsx        # Arquivo de entrada
```

---

## ✅ Pronto!

Agora seu projeto está pronto para desenvolvimento com uma base sólida, suporte a TypeScript, SVG como componentes, e caminhos absolutos usando `@`.