import { Router } from 'express';

import { createUser, updateUser, deleteUser, getUsers } from '../controllers/users';

const userRouter = Router();

userRouter.post('/', createUser);

userRouter.get('/', getUsers);

userRouter.put('/:id', updateUser);

userRouter.delete('/:id', deleteUser);

export default userRouter;