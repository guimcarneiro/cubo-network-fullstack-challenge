import { RequestHandler } from 'express';

import { User, CreateUserInterface } from '../models';

//Temporary
const USERS: User[] = [];

export const createUser: RequestHandler = (req, res, next) => {
    const user = (req.body as CreateUserInterface);

    const newUser = new User(user.firstName, user.lastName, user.participation);

    USERS.push(newUser);

    res.status(201).json({ message: 'User successfully created.', user: newUser })
}

export const updateUser: RequestHandler<{ id: string }> = (req, res, next) => {
    const userId = req.params.id;

    const updatedUser = (req.body as CreateUserInterface);

    const userIndex = USERS.findIndex(user => user.getId ===  userId);
   
    if(userIndex < 0){
        throw new Error('Could not find user!');
    }
    
    USERS[userIndex].setFirstName = updatedUser.firstName;
    USERS[userIndex].setLastName = updatedUser.lastName;
    USERS[userIndex].setParticipation = updatedUser.participation;

    res.status(200).json({ message: 'User updated!', user: USERS[userIndex] });
}

export const getUsers: RequestHandler = (req, res, next) => {
    res.status(200).json(USERS);
}

export const deleteUser: RequestHandler<{ id: string }> = (req, res, next) => {
    const userId = req.params.id;

    const userIndex = USERS.findIndex(user => user.getId ===  userId);

    if(userIndex < 0){
        throw new Error('Could not find user!');
    }

    const [ deletedUser ] = USERS.splice(userIndex, 1);

    res.status(204).json( deletedUser );

}