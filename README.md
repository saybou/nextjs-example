# Next.js example

A basic [Next.js](https://nextjs.org/) project example.
**This project will probably evolve over time.**

## Stack

- [Next.js](https://nextjs.org/) (> 9.3), the [React](https://reactjs.org/) Framework
- [Typescript](https://www.typescriptlang.org/) (> 3.8) for type checking.
- [Jest](https://jestjs.io/) for testing.
- [Enzyme](https://github.com/enzymejs/enzyme), to test easier our React Components.
- A sample [docker-compose.yml](https://docs.docker.com/compose/), which allow us to test our App with [Docker](https://www.docker.com/).

## IDE Setup

[VSCode](https://code.visualstudio.com/) is highly preferred. Please ensure you have installed these extensions:

- Prettier
- Eslint

## Getting Started

Install dependencies

```bash
npm install
```

Ready to use with [Docker](https://www.docker.com/)

```bash
# cd nodejs-example
docker-compose up -d
```

Run local Next server

```bash
# Attach to node container
docker exec -ti node sh

# Run server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying `pages/index.js` for example. The page auto-updates as you edit the file.

## Tests

Unit tests with coverage

```bash
npm run test
```

Styling / Linting

```bash
# Prettier
npm run prettier

# Linter
npm run lint

# Type checking
npm run typecheck
```

## Documentation

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js examples](https://github.com/zeit/next.js/tree/canary/examples)
