import * as ProjectModel from '../model'

export const listProject = async () => {
    const projects = await ProjectModel.list()
    return projects
}

