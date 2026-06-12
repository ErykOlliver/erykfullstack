import CreateBudgetModal from './components/create-budget-modal/create-budget-modal'
import BudgetList from './components/budget-list/budget-list'
import { listBudgets } from './services/list-budget'

export default async function BudgetsAndPayments() {
    const budgets = await listBudgets()

    return (
        <div className="flex flex-col gap-8 w-full max-w-400 mx-auto pb-10">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Orçamentos</h1>
                    <p className="text-sm text-gray-500">Gerencie propostas e pagamentos</p>
                </div>
                <CreateBudgetModal />
            </header>

            <BudgetList data={budgets} />
        </div>
    )
}