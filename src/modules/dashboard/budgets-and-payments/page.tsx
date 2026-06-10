import React from 'react'
import CreateBudgetModal from './components/create-budget-modal/create-budget-modal'

export default function BudgetsAndPayments() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-400 mx-auto pb-10">
      <CreateBudgetModal />
    </div>
  )
}
