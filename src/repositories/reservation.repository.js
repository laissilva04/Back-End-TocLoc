import { PrismaClient } from '@prisma/client';


export class ReservationRepository{
    prisma = new PrismaClient()

    async getAllReservations(){
        return await this.prisma.reservation.findMany();
    }
    async getReservationById(id){
        return await this.prisma.reservation.findUnique({
            where: {
                id: id
            }
        });
    }
    async createReservation({
        data,
        hora,
        id_sports_place,
        id_user
    }) {
        return await this.prisma.reservation.create({
            data: {
                data,
                hora,
                id_sports_place,
                id_user
            }
        });
    }
    async updateReservation(id, {
        data,
        hora,
        id_sports_place,
        id_user
    }) {
        return await this.prisma.reservation.update({
            where: {
                id: id
            },
            data: {
                data,
                hora,
                id_sports_place,
                id_user
            }
        });
    }
    async deleteReservation(id) {
        return await this.prisma.reservation.delete({
            where: {
                id: id
            }
        });
    }
}