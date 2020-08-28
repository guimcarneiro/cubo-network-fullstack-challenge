import { RequestHandler } from 'express';

import { User, UserInterface } from '../models';

//Temporary
const USERS: User[] = [];

export const createUser: RequestHandler = (req, res, next) => {
    const user = (req.body as UserInterface);

    const newUser = new User(user.firstName, user.lastName, user.participation);

    USERS.push(newUser);

    res.status(201).json({ message: 'User successfully created.', user: newUser })
}