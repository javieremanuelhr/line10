import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import jumbosRoutes from './routes/jumbosRoutes.js';
import bagsRoutes from './routes/bagsRoutes.js';
import productionRoutes from './routes/productionRoutes.js';
import cors from 'cors';

import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import AccountModel from './models/accounts.js';

const app = express();

//Middleware to allow frontend to make requests to backend from port 5173

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser())
app.use(express.json())


// JWT AUTHENTICATION CODE

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    AccountModel.findOne({email})
    .then(user => {
        if(user ) {
            if(user.password === password) {
                const accessToken = jwt.sign({email: email}, 
                    "jwt-access-token-secret-key", {expiresIn: '1m'})
                const refreshToken = jwt.sign({email: email}, 
                    "jwt-refresh-token-secret-key", {expiresIn: '5m'})

                res.cookie('accessToken', accessToken, {maxAge: 60000})

                res.cookie('refreshToken', refreshToken, 
                    {maxAge: 300000, httpOnly: true, secure: true, sameSite: 'strict'})
                return res.json({Login: true})
            }
        } else {
            res.json({Login: false, Message: "no record"})
        }
    }).catch(err => res.json(err))
})
const varifyUser = (req, res, next) => {
    const accesstoken = req.cookies.accessToken;
    if(!accesstoken) {
        if(renewToken(req, res)) {
            next()
        }
    } else {
        jwt.verify(accesstoken, 'jwt-access-token-secret-key', (err ,decoded) => {
            if(err) {
                return res.json({valid: false, message: "Invalid Token"})
            } else {
                req.email = decoded.email
                next()
            }
        })
    }
}

const renewToken = (req, res) => {
    const refreshtoken = req.cookies.refreshToken;
    let exist = false;
    if(!refreshtoken) {
        return res.json({valid: false, message: "No Refresh token"})
    } else {
        jwt.verify(refreshtoken, 'jwt-refresh-token-secret-key', (err ,decoded) => {
            if(err) {
                return res.json({valid: false, message: "Invalid Refresh Token"})
            } else {
                const accessToken = jwt.sign({email: decoded.email}, 
                    "jwt-access-token-secret-key", {expiresIn: '1m'})
                res.cookie('accessToken', accessToken, {maxAge: 60000})
                exist = true;
            }
        })
    }
    return exist;
}

app.get('/analytics',varifyUser, (req, res) => {
    return res.json({valid: true, message: "authorized"})
})


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