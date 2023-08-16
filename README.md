# NestJS REST API boilerplate 🇭🇷

[![NestJS API CI](https://github.com/poliath/nestjs-poliath-boilerplate/actions/workflows/docker-e2e.yml/badge.svg?branch=master)](https://github.com/poliath/nestjs-poliath-boilerplate/actions/workflows/docker-e2e.yml)
## Description <!-- omit in toc -->

NestJS REST API Boilerplate for Common Projects, Tailored for Seamless Integration with the [refine React boilerplate](https://github.com/poliath/poliath-refine-boilerplate) as frontend. for Frontend. However, this API is versatile enough to function independently and can be paired with various frontends such as React, Angular, Flutter, and more.

## Detailed Quick start guide
Detailed quick start guide is available [HERE](./QUICK_START_GUIDE.md)

## Table of Contents <!-- omit in toc -->

- [Features](#features)
- [Quick run](#quick-run)
- [Comfortable development](#comfortable-development)
- [Links](#links)
- [Automatic update of dependencies](#automatic-update-of-dependencies)
- [Database utils](#database-utils)
- [Tests](#tests)
- [Tests in Docker](#tests-in-docker)
- [Test benchmarking](#test-benchmarking)

## Features

- [x] Database ([typeorm](https://www.npmjs.com/package/typeorm)).
- [x] Seeding.
- [x] Config Service ([@nestjs/config](https://www.npmjs.com/package/@nestjs/config)).
- [x] Mailing ([nodemailer](https://www.npmjs.com/package/nodemailer)).
- [x] Sign in and sign up via email.
- [x] Social sign in (Apple, Facebook, Google, Twitter).
- [x] Admin and User roles.
- [x] I18N ([nestjs-i18n](https://www.npmjs.com/package/nestjs-i18n)).
- [x] File uploads. Support local and Amazon S3 drivers.
- [x] Swagger.
- [x] E2E and units tests.
- [x] Docker.
- [x] CI (Github Actions).
- [x] Logging

## Quick run

```bash
git clone --depth 1 https://github.com/poliath/nestjs-poliath-boilerplate.git my-app
cd my-app/
cp env-example .env
docker compose up -d
```

For check status run

```bash
docker compose logs
```

## Comfortable development

```bash
git clone --depth 1 https://github.com/poliath/nestjs-poliath-boilerplate.git my-app
cd my-app/
cp env-example .env
```

Change `DATABASE_HOST=postgres` to `DATABASE_HOST=localhost`

Change `MAIL_HOST=maildev` to `MAIL_HOST=localhost`

Run additional container:

```bash
docker compose up -d postgres adminer maildev
```

```bash
npm install

npm run migration:run

npm run seed:run

npm run start:dev
```

## Links

- Swagger: <http://localhost:3000/docs>
- Adminer (client for DB): <http://localhost:8080>
- Maildev: <http://localhost:1080>

## Database utils

Generate migration

```bash
npm run migration:generate -- src/database/migrations/CreateNameTable
```

Run migration

```bash
npm run migration:run
```

Revert migration

```bash
npm run migration:revert
```

Drop all tables in database

```bash
npm run schema:drop
```

Run seed

```bash
npm run seed:run
```

## Tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e
```

## Tests in Docker

```bash
docker compose -f docker-compose.ci.yaml --env-file env-example -p ci up --build --exit-code-from api && docker compose -p ci rm -svf
```

## Test benchmarking

```bash
docker run --rm jordi/ab -n 100 -c 100 -T application/json -H "Authorization: Bearer USER_TOKEN" -v 2 http://<server_ip>:3000/api/v1/users
```
## Detailed documentation
[Full documentation](https://github.com/poliath/nestjs-poliath-boilerplate/blob/master/docs/readme.md)
