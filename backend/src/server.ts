import express from 'express';
import { json } from 'body-parser';

import { errorHandler } from './errors';

import userRouter from './routes/user';

const server = express();

server.use(json());

//Redirect to User Routes
server.use('/users', userRouter);

//Error Handler
server.use(errorHandler);

server.listen(3000);