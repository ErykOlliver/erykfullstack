import { ProjectCategory } from '@/src/generated/prisma/enums'
import * as ProjectModel from '../model'

export const FindUniqueProject = async (slug: string) => {
    const findProject = await ProjectModel.findUnique(slug)
    return findProject
}

