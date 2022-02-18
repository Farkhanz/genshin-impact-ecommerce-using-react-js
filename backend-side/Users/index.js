import express from 'express';
import db from './config/database.js';
import router from './routes/index.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Terhubung ke database. . .');
    // await Users.sync();
} catch (error) {
    console.log(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(2000, () => console.log('Server running now on port 2000'));