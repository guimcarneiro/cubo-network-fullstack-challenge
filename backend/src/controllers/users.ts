import { RequestHandler } from 'express';

import { CreateUserInterface } from '../models';
import UserService from '../services/UserService';

export const createUser: RequestHandler = (req, res, next) => {
    const user = (req.body as CreateUserInterface);

    const createdUser = UserService.createUser(user);

    res.status(201).json({ message: 'User successfully created.', user: createdUser })
}

export const updateUser: RequestHandler<{ id: string }> = (req, res, next) => {
    const userId = req.params.id;

    const userToUpdate = (req.body as CreateUserInterface);

    const updatedUser = UserService.updateUser(userId, userToUpdate);

    res.status(200).json({ message: 'User updated!', user: updatedUser });
}

export const getUsers: RequestHandler = (req, res, next) => {
    const allUsers = UserService.getAllUsers();
    
    res.status(200).json(allUsers);
}

export const deleteUser: RequestHandler<{ id: string }> = (req, res, next) => {
    const userId = req.params.id;

    const deletedUser = UserService.deleteUser(userId);

    res.status(204).json(deletedUser);

}