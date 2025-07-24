# Dockerfile with PNPM for Nuxt - v1.2.2
# https://gist.github.com/sandros94/03675514546f17af1fd6db3863c043b4

# Base configuration
ARG node_tag=22-alpine
FROM node:${node_tag} AS base
WORKDIR /app

# Builder
FROM base AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# COPY package.json pnpm-lock.yaml .npmrc /app/
COPY package.json pnpm-lock.yaml /app/
RUN npm i -g --force corepack && corepack enable

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install --frozen-lockfile --shamefully-hoist

ARG NUXT_PUBLIC_URL=https://okikelabs.com
ARG NUXT_PUBLIC_NAME=Okikelabs

COPY . .
RUN --mount=type=cache,id=nuxt,target=/app/node_modules/.cache/nuxt/.nuxt \
  pnpm run build

# Final production container
FROM base AS runtime
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Convert build args to runtime environment variables
ENV NUXT_PUBLIC_URL=${NUXT_PUBLIC_URL}
ENV NUXT_PUBLIC_NAME=${NUXT_PUBLIC_NAME}

USER node
EXPOSE 3000
HEALTHCHECK  --retries=10 --start-period=5s \
  CMD wget --no-verbose --spider http://0.0.0.0:3000/ || exit 1

COPY --link --from=builder /app/.output/  ./

ENTRYPOINT [ "node", "server/index.mjs" ]