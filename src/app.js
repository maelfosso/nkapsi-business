import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import debugLib from 'debug';

import indexRouter from './routes/index';
import businessRouter from './routes/business';

const debug = debugLib('nkapsi:business-api:app');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/business', businessRouter);

export default app;
