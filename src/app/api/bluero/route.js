import { PrismaClient } from "@prisma/client";


export default async function GET(req,res) {
    const prisma = new PrismaClient();
    const result = await prisma.bluero.findMany();
    res.json(result)
}

