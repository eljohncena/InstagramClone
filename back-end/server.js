import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import Pusher from 'pusher';

// app config
const app= express();
const port = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(cors());

// DB config

// api routes
app.get('/', (req,res) => res.status(200).send('hello world'));

// listen

app.listen(port, () => console.log(`listening on localhost:${port}`));

