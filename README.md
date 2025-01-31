# Shopify CRM - Backend Handler Application

## Prerequisites
- Runtime: NodeJs v23.5+
- Language: TypeScript 5.4+
- Server: [Fastify](https://fastify.dev/)
- Package Manager: [Yarn](https://yarnpkg.com/)
- Process Manager: [PM2](https://pm2.keymetrics.io/docs/usage/application-declaration/)

## Usage
1. Open the terminal
2. Run `yarn` to install dependencies
3. Tweak `.env` file. (Note: all variables are required, see `.env.example`)
4. Change files under `src/**`.
5. Run `yarn start:dev` to boot the server.
6. Run `yarn build:prod` to create a production build.

## References
- [Fastify](https://fastify.dev/)
- [Node TypeScript Boilerplate](https://github.com/jiifw/node-ts-boilerplate)
- [Jii Framework - Core](https://github.com/jiifw/jii/tree/master/framework/core/src)