// src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes

app.use('/api/users', userRoutes);
app.get('/test', (req, res) => {
  res.send('Server is working!');
});

// MongoDB URI
const mongoUri = "mongodb+srv://uhmls:QvJIo1deOQuN2bRB@learning01.kjminwi.mongodb.net/?retryWrites=true&w=majority&appName=learning01";

// Connect to MongoDB
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });


export default app;
