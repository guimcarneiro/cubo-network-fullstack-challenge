import { generateId } from "../utils";

export interface CreateUserInterface {
    firstName: string;
    lastName: string;
    participation: number;
}

export class User {
    private readonly id: string;
    private firstName: string;
    private lastName: string;
    private participation: number;

    constructor(
        firstName: string,
        lastName: string,
        participation: number
    ){  
        if(!firstName){
            throw new Error('Invalid User first name');
        }
        if(!lastName){
            throw new Error('Invalid User last name');
        }
        if(participation > 100 || participation < 0){
            throw new Error('Invalid User Participation');
        }
        this.id = String(generateId());
        this.firstName = firstName;
        this.lastName = lastName;
        this.participation = participation;
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

    get getParticipation(): number{
        return this.participation;
    }

    set setFirstName(firstName: string){
        this.firstName = firstName;
    }

    set setLastName(lastName: string){
        this.lastName = lastName;
    }

    set setParticipation(participation: number){
        this.participation = participation;
    }

}