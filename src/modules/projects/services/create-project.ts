import * as ProjectModel from '../model'
import { typeCreateProjectProps, typeProjectProps } from '../type'

export const createProject = async (data: typeCreateProjectProps) => {
  return await ProjectModel.create(data)
}


