# Dockerfile with npm for Nuxt - v1.2.2
# https://gist.github.com/sandros94/03675514546f17af1fd6db3863c043b4

# Base configuration
ARG node_tag=22-alpine
FROM node:${node_tag} AS base
WORKDIR /app

# Builder
FROM base AS builder

COPY package.json package-lock.json* /app/
RUN npm ci --omit=dev

ARG NUXT_PUBLIC_URL=https://okikelabs.com
ARG NUXT_PUBLIC_NAME=Okikelabs

COPY . .
RUN --mount=type=cache,id=nuxt,target=/app/node_modules/.cache/nuxt/.nuxt \
  npm run build

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