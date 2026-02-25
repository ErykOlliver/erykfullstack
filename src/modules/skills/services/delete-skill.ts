'use server'

import { revalidatePath } from 'next/cache';
import * as SkillModel from '../model'

export const deleteSkill = async (id: number) => {
    const deleted = await SkillModel.eraser(id)
    revalidatePath('/dashboard');

    return deleted
}