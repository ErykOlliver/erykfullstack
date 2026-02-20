import * as SkillModel from '../model'

export const listSkills = async () => {
    return await SkillModel.list()
}