import { PrismaClient } from "@prisma/client";
import { Router } from "express";


const routes = Router()

routes.get('/', async (req, res) => {

    const prisma = new PrismaClient()

    const users = await prisma.user.findMany()

    res.status(200).json({users})
})

export { routes }