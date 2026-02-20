import * as ProjectModel from '../model'

export const deleteProject = async (id: string) => {
    if (id === '') return

    return ProjectModel.eraser(id)
}