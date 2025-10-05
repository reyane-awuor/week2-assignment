# Products REST API

A RESTful API built with Express.js for managing products.

## Quick Start

1. Install dependencies: `npm install`
2. Start server: `npm run dev`
3. API available at: `http://localhost:3000`

## API Endpoints

- GET `/` - Hello message
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/products` - Create product (requires auth)
- PUT `/api/products/:id` - Update product (requires auth)
- DELETE `/api/products/:id` - Delete product (requires auth)
- GET `/api/products/search?q=term` - Search products
- GET `/api/products/stats` - Get statistics

## Authentication
Use header: `x-api-key: secret-key-123`