import * as NetworkModel from '../model'

export const deleteNetwork = async (id: number) => {
    return await NetworkModel.eraser(id)
}