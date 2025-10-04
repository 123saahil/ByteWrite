# **ByteWrite: A Full-Stack Blogging Platform ✍️**

A modern, full-stack blogging platform built with a **monorepo architecture** — featuring a **Cloudflare Workers backend**, **shared type-safe library**, and a **React + Vite frontend**.

---

## 🌐 Live Demo  
👉 **[ByteWrite](https://byte-write-omega.vercel.app/)**

---

## 🚀 Features

- 🔐 **User Authentication** — Secure signup/sign-in with JWT.  
- 📝 **Blog CRUD** — Create, read, and update blog posts.  
- 🤖 **AI Integration** — Generate content summaries using Google Gemini API.  
- ⚡ **Serverless Backend** — Built with Hono.js on Cloudflare Workers using Prisma Accelerate.  
- 🧩 **Type-Safe Development** — Shared Zod schemas for end-to-end validation.  
- 💻 **Modern Frontend** — Responsive React app with Vite and Tailwind CSS.  
- ⚙️ **Optimized Performance** — Lightweight, fast, and scalable.

---

## 📁 Monorepo Structure

```
bytewrite/
├── backend/   → Cloudflare Workers API using Hono.js + Prisma
├── common/    → Shared Zod schemas and TypeScript types
└── frontend/  → React + Vite + Tailwind user interface
```

---

## 🧠 Tech Stack

**Backend:** Hono.js · Cloudflare Workers · Prisma · PostgreSQL · Zod · JWT  
**Frontend:** React · Vite · Tailwind CSS · Axios · React Router DOM · Framer Motion  
**AI:** Google Gemini API  
**Infra:** Prisma Accelerate · npm Workspaces  

---

## ⚙️ Setup & Run

### Backend

```bash
cd backend
npm install
```

Set environment variables in `wrangler.toml` or `wrangler.example.jsonc`:

```json
{
  "vars": {
    "DATABASE_URL": "<your-db-url>",
    "JWT_SECRET": "<your-secret>",
    "GEMINI_API_KEY": "<your-key>"
  }
}
```

Run migrations and start:

```bash
npx prisma migrate dev --name init_schema
npm run dev
```

Deploy:

```bash
npm run deploy
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🧩 Common Package

Contains shared **Zod schemas** and **TypeScript types** for consistent validation between frontend and backend.

Example:

```ts
import { signupInput, createBlogInput } from "@123saahil/bytewrite-common";
```
