# Configuration Guide

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000

# MongoDB Connection String
# Replace with your MongoDB connection string
# For local MongoDB: mongodb://localhost:27017/bugtrackpro
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/bugtrackpro
MONGODB_URI=mongodb://localhost:27017/bugtrackpro

# JWT Secret Key
# Generate a secure random string for production
JWT_SECRET=your_super_secret_jwt_key_here

# Optional: Environment
NODE_ENV=development
```

## MongoDB Setup

### Option 1: Local MongoDB
1. Install MongoDB on your system
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/bugtrackpro`

### Option 2: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Replace `<username>`, `<password>`, and `<dbname>` with your values

## JWT Secret Generation

For production, generate a secure JWT secret:

```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Using OpenSSL
openssl rand -hex 64
```

## Quick Start

1. Copy the environment variables above to a `.env` file
2. Update the `MONGODB_URI` with your database connection
3. Generate and set a secure `JWT_SECRET`
4. Run the application using the start scripts:
   - Windows: `start.bat`
   - Unix/Linux/Mac: `./start.sh` 