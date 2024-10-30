import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Import route modules
import studentRoutes from './Route/studentRoutes.js';
import signupRoutes from './Route/signupRoute.js';


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Get the port and MongoDB URI from environment variables
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/api', studentRoutes);
app.use('/api/auth', signupRoutes);

// Optional error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
