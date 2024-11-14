import { UserRepository } from "../repositories/user.repository";

export class UserService {
    userRepository = new UserRepository()

    async createUser({
        nome,
        email,
        tipo
    }) {
        const userExists = await this.userRepository.findByEmail(email);

        if(userExists) {
            throw new Error('E-mail já utilizado');
        }

        return await this.userRepository.createUser({
            nome,
            email,
            tipo
        });
    }
}