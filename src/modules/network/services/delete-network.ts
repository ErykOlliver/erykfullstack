'use server'


import * as NetworkModel from '../model'
import { revalidatePath } from "next/cache";


export const deleteNetwork = async (id: number) => {
    const deleted = await NetworkModel.eraser(id)
    revalidatePath('/dashboard');

    return deleted
}