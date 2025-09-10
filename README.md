# ByteWrite: A Full-Stack Blogging Platform ✍️

ByteWrite is a modern, full-stack blogging platform that lets users sign up, create, and publish blog posts. It features a responsive frontend built with **React**, and a robust backend powered by **Cloudflare Workers**. The platform also includes a custom-trained AI model to help users generate content.

## Features ✨

  * **User Authentication**: Secure sign-up and sign-in with password hashing and JWT-based authentication.
  * **Create & Publish Blogs**: Users can write, save, and publish their own blog posts.
  * **AI Content Generation**: Leverage a custom-trained AI model to generate blog content from a simple prompt.
  * **Serverless Backend**: The backend is built on Cloudflare Workers, providing a scalable, performant, and cost-effective solution.
  * **Relational Database**: Uses **Prisma** as the ORM to interact with a **PostgreSQL** database.
  * **Shared Type Safety**: A monorepo structure with a `common` package ensures type safety and shared validation schemas (**Zod**) between the frontend and backend.
  * **Modern Frontend**: A clean and responsive user interface built with **React**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack 🛠️

### Frontend

  * **React**: A JavaScript library for building user interfaces.
  * **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
  * **Vite**: A fast build tool for modern web development.
  * **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  * **React Router DOM**: For handling client-side routing.
  * **Axios**: For making HTTP requests to the backend.

### Backend

  * **Cloudflare Workers**: A serverless platform for deploying code to the edge.
  * **Hono**: A lightweight and fast web framework for the Edge.
  * **Prisma**: A next-generation ORM for Node.js and TypeScript.
  * **PostgreSQL**: A powerful, open-source relational database.
  * **JWT**: JSON Web Tokens for secure authentication.
  * **Zod**: A TypeScript-first schema declaration and validation library.
  * **Google Gemini API**: Integrated for AI content generation.

## Getting Started 🚀

### Prerequisites

  * Node.js (\>=18.0.0)
  * npm
  * A Cloudflare account
  * A PostgreSQL database (e.g., from Vercel Postgres, Supabase, etc.)
  * A Google Gemini API key

### 1\. Backend Setup

Navigate to the `backend` directory.

```bash
cd backend
```

Install the dependencies.

```bash
npm install
```

Configure your environment variables by creating a `wrangler.toml` file (or rename `wrangler.example.jsonc` to `wrangler.toml` and fill in the values).

```json
{
  "vars": {
    "DATABASE_URL": "<your-db-url>",
    "JWT_SECRET": "<your-secret>",
    "GEMINI_API_KEY": "<your-key>"
  }
}
```

Migrate your database schema.

```bash
npm run prisma:migrate
```

Start the local development server.

```bash
npm run dev
```

### 2\. Frontend Setup

Navigate to the `frontend` directory.

```bash
cd frontend
```

Install the dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.
