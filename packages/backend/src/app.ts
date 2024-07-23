import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// MongoDB URI
const mongoUri = 'mongodb://localhost:27017/mydatabase'; // Replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

export default app;
