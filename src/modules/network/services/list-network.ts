import * as NetworkModel from '../model'

export const listNetwork = async () => {
    return await NetworkModel.list()
}