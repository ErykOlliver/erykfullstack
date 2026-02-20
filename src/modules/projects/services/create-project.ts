import * as ProjectModel from '../model'
import { typeProjectProps } from '../type'

export const createProject = async (data: typeProjectProps) => {
    if (!data.title) {
    throw new Error("Título é obrigatório")
  }

  // slug automático exemplo clássico
  const slug = data.title.toLowerCase().replace(/\s+/g, "-")

  return ProjectModel.create({
    ...data,
    slug
  })
}


