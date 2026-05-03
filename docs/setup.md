# Setup Guide

This guide explains how to install, configure, and run the **Dynamic Portfolio Project** locally.
It covers system requirements, installation steps, environment configuration, project structure, and troubleshooting.

---

## System Requirements

- **Operating System**: macOS, Linux, or Windows 10+
- **Node.js**: v18 or higher
- **Package Manager**: npm (v9+) or yarn
- **Git**: for cloning the repository
- **Browser**: latest Chrome/Firefox/Edge

Optional:

- **VS Code** with TypeScript, ESLint, and MDX extensions
- **Docker** if you want to containerize Payload CMS

---

## Installation Steps

1. **Clone the repository**

  ```bash
  git clone https://github.com/your-username/my-dynamic-portfolio.git
  cd my-dynamic-portfolio
  ```
2. **Install dependencies**

  ```bash
  npm install
  ```

or:

  ```
    yarn install
  ```

3. **Configure environment variables**

  - Create a `.env.local` file in the project root.
  - Add required variables:

  ```env
  NEXT_PUBLIC_SITE_URL=http://localhost:3000
  PAYLOAD_SECRET=your-secret-key
  DATABASE_URL=your-database-url
  ```
4. **Run the development server**

  ```bash
  npm run dev
  ```

Access the site at `http://localhost:3000`.

## Project Structure Overview
- **src/app/** → Next.js App Router pages and layouts
- **src/components/** → Reusable UI components
- **src/collections/** → Payload CMS collections
- **docs/** → MDX documentation files (intro, setup, architecture, etc.)
**public/** → Static assets (images, icons, etc.)
- `payload.config.ts` → Payload CMS configuration
- `next.config.ts` → Next.js configuration
