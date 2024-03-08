# Use the official Node.js image.
FROM node:16-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json, package-lock.json, and your TypeScript config (tsconfig.json)
COPY package*.json tsconfig.json ./

# Install dependencies including TypeScript.
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Compile TypeScript to JavaScript.
RUN npm run build

# Expose the port the app runs on.
EXPOSE 3000

# Run the compiled app.
CMD [ "node", "main.js" ]
