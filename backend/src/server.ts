import express from 'express';
import { json } from 'body-parser';

import { errorHandler } from './errors';

import userRouter from './routes/user';

const server = express();

server.use(json());

server.use('/users', userRouter);

server.use(errorHandler);

server.listen(3000);