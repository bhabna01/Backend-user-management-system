import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

const mongoUri = process.env.MONGO_URI as string;
mongoose.connect(mongoUri).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

export default app;
