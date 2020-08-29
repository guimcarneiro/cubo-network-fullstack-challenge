import { generateId } from "../utils";

export interface CreateUserInterface {
    firstName: string;
    lastName: string;
    amount: number;
}

export class User {
    private readonly id: string;
    private firstName: string;
    private lastName: string;
    private amount: number;

    constructor(
        firstName: string,
        lastName: string,
        amount: number
    ){  
        if(!firstName){
            throw new Error('Invalid User first name');
        }
        if(!lastName){
            throw new Error('Invalid User last name');
        }
        if( amount < 0){
            throw new Error('Invalid User amount');
        }
        this.id = String(generateId());
        this.firstName = firstName;
        this.lastName = lastName;
        this.amount = amount;
    }

    get getId(): string{
        return this.id;
    }

    get getFirstName(): string{
        return this.firstName;
    }

    get getLastName(): string{
        return this.lastName;
    }

    get getAmount(): number{
        return this.amount;
    }

    set setFirstName(firstName: string){
        this.firstName = firstName;
    }

    set setLastName(lastName: string){
        this.lastName = lastName;
    }

    set setAmount(amount: number){
        this.amount = amount;
    }

}