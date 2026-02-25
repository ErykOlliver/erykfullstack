'use server'

import * as NetworkModel from '../model'
import { typeNetworkProps } from "../type";
import { revalidatePath } from "next/cache";


export const createNetwork = async (data: typeNetworkProps) => {
    const result = await NetworkModel.create({ name: data.name.toLocaleLowerCase(), link: data.link })
    revalidatePath('/dashboard');
    
    return result
}

