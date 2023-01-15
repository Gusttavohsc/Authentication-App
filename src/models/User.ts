import { uuid } from 'uuidv4';
import { Schema, model, connect } from 'mongoose';
import { ICreateUserRequestDTO } from '../useCases/CreateUser/CreateUserDTO'

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id){
            this.id = uuid();
        }
    }
}

const userSchema = new Schema<ICreateUserRequestDTO>({ 
    name: { type: String, required: true},
    email: { type: String,  required: true },
    password: { type: String,  required: true },
});

// 3. Create a Model.
const User2 = model<ICreateUserRequestDTO>('User', userSchema);