# Dockerfile
FROM node:20-alpine

ENV NODE_ENV=production
WORKDIR /app

# 1) Copy manifests first for layer caching
COPY package*.json ./
COPY .api/apis/spruce/package*.json .api/apis/spruce/

# 2) Install root deps and force-install SDK deps that live in the submodule
RUN npm install && \
    npm install oas api json-schema-to-ts

# 3) Copy application source
COPY . .

# 4) Default port; adjust if needed
EXPOSE 3000

# 5) Start your web service (expects a server.js you created)
CMD ["node", "server.js"]
