'use server'

import { typeSkillsProps } from "../type";
import * as SkillModel from '../model'
import { revalidatePath } from "next/cache";


export const createSkill = async (data: typeSkillsProps) => {
    if (!data.name) {
        throw new Error("Nome da Skill é obrigatória")
    }

    const result = await SkillModel.create({ name: data.name, category: data.category })
    revalidatePath('/dashboard');

    return result
}