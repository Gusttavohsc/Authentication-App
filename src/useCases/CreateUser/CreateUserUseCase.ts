import { IUsersRepository} from '../../repositories/IUsersRepository';
import { User } from '../../models/User';
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase{
    constructor(private usersRepository: IUsersRepository) {}

    async execute(data: ICreateUserRequestDTO){
        const userAleradyExists = await this.usersRepository.findByEmail(data.email);

        if(userAleradyExists){
            throw new Error('User already exists.');
        }

        const user = new User(data);

        await this.usersRepository.save(user);
    }
}