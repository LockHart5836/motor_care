const express = require('express'); // Import Express
const { PrismaClient } = require('@prisma/client'); // Import Prisma client
const cors = require('cors'); // Import CORS for cross-origin requests
const app = express(); // Initialize Express
const prisma = new PrismaClient(); // Initialize Prisma
const bcrypt = require('bcryptjs');

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable parsing JSON bodies

// Define a route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Define a route to add a new user
app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ error: 'Error creating user, maybe email already exists' });
  }
});

// Define a route for user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Error during login' });
  }
});

// Start the server on port 3000
const PORT = 3000 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); 
});
