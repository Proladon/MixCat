# Quick Start

## Step 1. Environment Variable File

Rename `.env.example` in the project to `.env.production`and fill in the necessary fields：

- `BOT_TOKEN`
- `CLIENT_ID`
- `GUILD_ID`

> [!NOTE]
> If you need separate development and production environments, you can copy `.env.example` again and rename it to `.env.development`.

## Step 2. Install Dependencies

In the terminal at the project path, simply run the install dependencies command：

::: code-group

```bash [yarn]
yarn install
```

```bash [npm]
npm install
```

:::

## Step 3. Start

In the terminal at the project path, simply run the start command：

- Run in `development environment`, which will read `.env.development`:

  > Running the dev environment defaults to `vite-node's watch` mode, meaning you can directly modify files and `vite-node` will detect the file changes and automatically restart to achieve `hot reload`.

  > If you do not want to run this mode, you just need to go to the `package.json` file's scripts section and remove the `--watch` parameter from the `dev` option.

::: code-group

```bash [yarn]
yarn dev
```

```bash [npm]
npm run dev
```

:::

- Run in `production environment`, which will read the variables in `.env.production`：

::: code-group

```bash [yarn]
yarn start
```

```bash [npm]
npm run start
```

:::
