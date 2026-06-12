import * as BudgetModel from '../model'

export async function listBudgets() {
    return await BudgetModel.list()
}