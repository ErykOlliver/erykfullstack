import * as NetworkModel from '../model'
import { typeNetworkProps } from "../type";

export const createNetwork = async (data: typeNetworkProps) => {
    return await NetworkModel.create(data)
}

