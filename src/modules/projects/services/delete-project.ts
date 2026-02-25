'use server'

import { revalidatePath } from 'next/cache'
import * as ProjectModel from '../model'

export const deleteProject = async (id: string) => {
    if (id === '') return

    const deleted = await ProjectModel.eraser(id)
    revalidatePath('/dashboard')

    return deleted
}