import express, { json } from 'express';
import morgan from 'morgan';


//Initialize App
const app = express();

//Import Routes
import indexRouter from './routes/index'

//Middlewares
app.use(morgan('dev'));
app.use(json());

//Routes
app.use('/', indexRouter);

export default app;