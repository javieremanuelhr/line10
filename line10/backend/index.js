import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import jumbosRoutes from './routes/jumbosRoutes.js';
import bagsRoutes from './routes/bagsRoutes.js';
import productionRoutes from './routes/productionRoutes.js';
import cors from 'cors';

import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();

//Middleware to allow frontend to make requests to backend from port 5173

app.use(cors({ origin: 'http://localhost:5173' }));



//Middleware to parse incoming requests with JSON payloads
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return response = res.status(200).send('API is running');
})

//Routes

app.use('/jumbos', jumbosRoutes);
app.use('/bags', bagsRoutes);
app.use('/production', productionRoutes);

//Connect to MongoDB

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB: ', error);
    });