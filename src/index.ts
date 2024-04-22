// src/index.ts
import express from 'express';
import connectMongo from './config/connection';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
dotenv.config();
connectMongo();
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});