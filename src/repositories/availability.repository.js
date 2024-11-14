import { PrismaClient } from '@prisma/client';


export class AvailabilityRepository{
    prisma = new PrismaClient()

    async getAllAvailability(){
        return await this.prisma.availability.findMany();
    }
    async getAvailabilityById(id){
        return await this.prisma.availability.findUnique({
            where: {
                id: id
            }
        });
    }
    async createAvailability({
        data,
        hora,
        id_sports_place
    }) {
        return await this.prisma.availability.create({
            data: {
                data,
                hora,
                id_sports_place
            }
        });
    }
    async updateAvailability(id, {
        data,
        hora,
        id_sports_place
    }) {
        return await this.prisma.availability.update({
            where: {
                id: id
            },
            data: {
                data,
                hora,
                id_sports_place
            }
        });
    }
    async deleteAvailability(id) {
        return await this.prisma.availability.delete({
            where: {
                id: id
            }
        });
    }
}