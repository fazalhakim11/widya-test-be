POST /api/register: Registers a new user.

Request Body: { "name": "John", "email": "john@example.com", "password": "password", "gender": "Male" }
Response: { "token": "JWT_TOKEN" }

POST /api/login: Logs in an existing user.

Request Body: { "email": "john@example.com", "password": "password" }
Response: { "token": "JWT_TOKEN" }

GET /api/profile: Retrieves the user profile.

Headers: { Authorization: "JWT_TOKEN" }
Response: { "name": "John", "email": "john@example.com", "gender": "Male" }

POST /api/products: Creates a new product.

Headers: { Authorization: "JWT_TOKEN" }
Request Body: { "name": "Product1", "description": "Product description", "price": 100 }
Response: { "name": "Product1", "description": "Product description", "price": 100, "owner": "USER_ID" }

GET /api/products: Fetches products created by the logged-in user.

Headers: { Authorization: "JWT_TOKEN" }
Response: [{ "_id": "PRODUCT_ID", "name": "Product1", "description": "Product description", "price": 100 }]

PUT /api/products/:id: Updates a product.

Headers: { Authorization: "JWT_TOKEN" }
Request Body: { "name": "Updated Product", "description": "Updated description", "price": 150 }
Response: { "_id": "PRODUCT_ID", "name": "Updated Product", "description": "Updated description", "price": 150 }

DELETE /api/products/:id: Deletes a product.

Headers: { Authorization: "JWT_TOKEN" }
Response: { "message": "Product deleted" }