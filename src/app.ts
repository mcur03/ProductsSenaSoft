import express from 'express';
import productRoutes from './routes/productRoute';
import userRouter from './routes/userRoute'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', productRoutes);
app.use('/api', userRouter);

export default app;
