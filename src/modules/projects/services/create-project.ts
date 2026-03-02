import * as ProjectModel from '../model'
import { typeProjectProps } from '../type'

export const createProject = async (data: typeProjectProps) => {
  return await ProjectModel.create(data)
}


