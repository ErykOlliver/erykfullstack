import * as adminModel from '../model'

export async function listAdmins() {
    return await adminModel.list()
}