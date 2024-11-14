import { PrismaClient } from "@prisma/client/extension";


export class UserRepository {
    prisma = new PrismaClient()

    async getAllUsers() {
        return await this.prisma.user.findMany();
    }

    async getUserById(id) {
        return await this.prisma.user.findUnique({
            where: {
                id: id
            }
        });
    }

    async createUser({
        nome,
        email,
        tipo
    }) {
        return await this.prisma.user.create({
            data: {
                nome,
                email,
                tipo
            }
        });
    }

    async updateUser(id, {
        nome,
        email,
        tipo
    }) {
        return await this.prisma.user.update({
            where: {
                id: id
            },
            data: {
                nome,
                email,
                tipo
            }
        });
    }

    async deleteUser(id) {
        return await this.prisma.user.delete({
            where: {
                id: id
            }
        });
    }

    async findByEmail(email) {
        return await this.prisma.user.findUnique({
            where: {
                email: email
            }
        });
    }
}