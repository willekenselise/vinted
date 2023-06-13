import express, { Request, Response } from 'express';
let mysql = require("mysql");
import indexRouter from './controllers/index'
import userRouter from './controllers/users/user-controller'

const app = express();

app.use('/', indexRouter)
app.use('/users', userRouter)

const port = 3000;

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});