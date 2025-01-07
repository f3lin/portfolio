# Step 1: Use the Node.js image (for Angular development)
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that the Angular app will run on
EXPOSE 4200

# Step 2: Run the Angular development server
CMD ["npm", "start"]
