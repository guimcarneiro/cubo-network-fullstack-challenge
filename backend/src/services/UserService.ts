import { User, CreateUserInterface } from "../models";

//Temporary
const USERS: User[] = [];


class UserService {

    static createUser = (user: CreateUserInterface) => {
        const newUser = new User(user.firstName, user.lastName, user.amount);

        USERS.push(newUser);
        
        return newUser;
    }

    static updateUser = (userId: string, updatedUser: CreateUserInterface) => {
        
        const userIndex = USERS.findIndex(user => user.getId ===  userId);
   
        if(userIndex < 0){
            throw new Error('Could not find user!');
        }
    
        USERS[userIndex].setFirstName = updatedUser.firstName;
        USERS[userIndex].setLastName = updatedUser.lastName;
        USERS[userIndex].setAmount = updatedUser.amount;

        return updatedUser;
    }

    static deleteUser = (userId: string) => {
        const userIndex = USERS.findIndex(user => user.getId ===  userId);

        if(userIndex < 0){
            throw new Error('Could not find user!');
        }
    
        const [ deletedUser ] = USERS.splice(userIndex, 1);

        return deletedUser;
    }

    static getAllUsers = () => {
        return USERS;
    }

}

export default UserService;