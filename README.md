# Wave chat Next.js Authentication with NextAuth.js and Apollo Client

This repository contains a Next.js application with authentication implemented using NextAuth.js with custom credentials and Apollo Client for GraphQL queries.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Customizing Authentication Pages](#customizing-authentication-pages)
- [Using Apollo Client](#using-apollo-client)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates how to implement authentication in a Next.js application using NextAuth.js with custom credentials and how to set up Apollo Client for GraphQL queries.

## Getting Started

To get started with this project, clone the repository and install the necessary dependencies.

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Clone the repository

```bash
git clone https://github.com/Wave-Chat/wave-chat-app
cd wave-chat-app
```

## Installation

Install the dependencies:

```bash
npm install
```
or
```bash
yarn install
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root of your project and add the necessary environment variables, including `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, and `GRAPHQL_ENDPOINT`.

### NextAuth Configuration

Configure NextAuth.js to use custom credentials. Implement the `authorize` method to handle user authentication based on the provided credentials.

### Apollo Client Configuration

Set up Apollo Client in your project and create an Apollo Client instance. Provide this instance to your Next.js application.

## Usage

### Starting the Development Server

To start the development server, run:

```bash
npm run dev
```
or
```bash
yarn dev
```

### Accessing the Application

Once the server is running, you can access the application at `http://localhost:3000`.

## Customizing Authentication Pages

NextAuth.js provides default authentication pages, but you can customize them by creating your own pages. Refer to the NextAuth.js documentation for detailed instructions on how to override the default pages.

## Using Apollo Client

### Setting Up Apollo Client

Install Apollo Client and its dependencies, then set up Apollo Client and provide it to your Next.js application.

### Making GraphQL Queries

Use Apollo Client to make GraphQL queries in your components.

## Troubleshooting

Refer to the Next.js, NextAuth.js, and Apollo Client documentation for troubleshooting common issues.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.