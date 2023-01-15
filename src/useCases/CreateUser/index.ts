import { MongoDBUsersRepository } from '../../repositories/implementations/MongoDBUsersRepository';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController} from './CreateUserController';

const mongoDBUsersRepository = new MongoDBUsersRepository();

const createUserUserCase = new CreateUserUseCase(
    mongoDBUsersRepository,
);

const createUserController = new CreateUserController(createUserUserCase);

export { createUserUserCase, createUserController }