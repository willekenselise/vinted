import express, { Request, Response } from 'express';
import indexRouter from './controllers/index'
import userRouter from './controllers/users/user-controller'
import productRouter from './controllers/products/product-controller'

const app = express();

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/products', productRouter)

const port = 3000;

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});