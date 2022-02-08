import express from 'express';
import db from './config/database.js';
import productRoutes from './routes/index.js';
import cors from 'cors';

const app = express();

try {
    await db.authenticate();
    console.log("Berhasil Terhubung. .");
} catch (error) {
    console.log("Tidak dapat terhubung!");
}

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes); 

app.listen(2000,()=>console.log("Terhubung ke port 2000. . ."));