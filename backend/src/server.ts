import express, { RequestHandler } from 'express';
import { json } from 'body-parser';

import { errorHandler } from './errors';

const server = express();

server.use(json());

//base endpoint
server.use('/');

server.use('/users');

//Error Handler
server.use(errorHandler);

server.listen(3000);