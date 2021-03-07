import express, { json } from 'express';
import morgan from 'morgan';

//Database
const db = require('./config/db');

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
    initial();
  });

//Initialize App
const app = express();

//Import Routes
import indexRouter from './routes/index';
import userRoute from './routes/user';

//Middlewares
app.use(morgan('dev'));
app.use(json());

//Routes
app.use('/', indexRouter);
app.use('/users', userRoute);

export default app;