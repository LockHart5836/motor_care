const express = require('express'); // Import Express
const { PrismaClient } = require('@prisma/client'); // Import Prisma client
const cors = require('cors'); // Import CORS for cross-origin requests
const app = express(); // Initialize Express
const prisma = new PrismaClient(); // Initialize Prisma

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable parsing JSON bodies

// Define a route to get all users
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Define a route to add a new user
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({ data: { name, email } });
  res.json(user);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
