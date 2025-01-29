import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModels.js';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

// Middleware for parsing JSON data

app.use(express.json());

// Middleware for CORS
// This will enable the API to accept requests from the frontend (allOrigins)
app.use(cors());
// This will enable the API to accept requests from the frontend (specific origin)
//app.use(cors({ 
//    origin: 'http://localhost:5173',
//    methods: 'GET, POST, PUT, DELETE',
//    allowedHeaders: 'Content-Type, Authorization',
//    }));

app.get('/', (req, res) => {
    console.log(req);
    res.send('Welcome to the Bookstore API!');
});

app.use('/books', bookRoutes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });
