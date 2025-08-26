FROM node:20-alpine

WORKDIR /app

# Copy root package files
COPY package*.json ./
COPY .api/apis/spruce/package*.json .api/apis/spruce/

# Install dependencies
RUN npm install

# Copy all source
COPY . .

# Expose port (adjust if service later binds to a specific one)
EXPOSE 3000

# Run entrypoint directly
CMD ["node", ".api/apis/spruce/index.js"]

