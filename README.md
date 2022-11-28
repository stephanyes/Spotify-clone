# Stack

React
Postgres
Prisma
Nextjs
Vercel
Docker

Spotify Clone

This App is a clone of Spotify built with NextJs, Docker for Postgres database.

The idea behind this app is to practise my frontend skills and my backend skills. Prisma is the ORM I'm using to connect and perform queries to Postgres.

## Getting Started

First, run the script to start docker and for prisma migrations

```bash
npm run db:dev:restart
```

Second, run the app

```bash
npm run dev
```

If you need to change Postgres version, ports etc go to:

```
docker-compose.yml
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
