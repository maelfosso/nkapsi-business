import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import config from './config/config';

import indexRouter from './routes/index';
import businessRouter from './routes/business';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

console.log(`\n[CONFIG APP DB]`, config.default.db.uri);
mongoose
  .connect(config.default.db.uri, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log(`Connected to MongoDB at ${config.default.db.uri}`);
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
    process.exit();
  });

app.use('/', indexRouter);
app.use('/users', businessRouter);

export default app;
