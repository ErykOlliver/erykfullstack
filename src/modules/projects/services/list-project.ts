import { ProjectCategory } from '@/src/generated/prisma/enums'
import * as ProjectModel from '../model'

export const listProject = async (offset: number, limit: number, category?: ProjectCategory) => {
    const projects = await ProjectModel.list(offset, limit, category)
    return projects
}

