import express, { response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors'

const app = express();

app.use(express.json());

//handle cors policy
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowHeaders: ['Content-Type']
//     })
// )

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hi there, Welcome to my very first MERN Stack App")
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
        
    })
    .catch((error) => {
        console.log(error)
    })
