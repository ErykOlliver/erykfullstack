import * as SkillModel from '../model'

export const deleteSkill = async (id: number) => {
    return SkillModel.eraser(id)
}