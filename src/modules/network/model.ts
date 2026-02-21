import prisma from "@/src/shared/utils/prisma";
import { typeNetworkProps } from "./type";

export async function create(data: typeNetworkProps) {
    return await prisma.network.create({
        data
    })
}

export async function list(){
    
}