import { PrismaClient } from '@prisma/client';


export class Sports_PlaceRepository{
    prisma = new PrismaClient()


    async getAllSportsPlace(){
        return await this.prisma.sports_place.findMany();
    }
    async getSportsPlaceById(id){
        return await this.prisma.sports_place.findUnique({
            where: {
                id: id
            }
        });
    }
    async createSportsPlace({
        nome,
        endereco,
        telefone,
        email,
        tipo
    }) {
        return await this.prisma.sports_place.create({
            data: {
                nome,
                endereco,
                telefone,
                email,
                tipo
            }
        });
    }
    async updateSportsPlace(id, {
        nome,
        endereco,
        telefone,
        email,
        tipo
    }) {
        return await this.prisma.sports_place.update({
            where: {
                id: id
            },
            data: {
                nome,
                endereco,
                telefone,
                email,
                tipo
            }
        });
    }
    async deleteSportsPlace(id) {
        return await this.prisma.sports_place.delete({
            where: {
                id: id
            }
        });
    }
}