import { typeSkillsProps } from "../type";
import * as SkillModel from '../model'


export const createSkill = async (data: typeSkillsProps) => {
    if (!data.name) {
        throw new Error("Nome da Skill é obrigatória")
    }

    return await SkillModel.create({ name: data.name, category: data.category })
}