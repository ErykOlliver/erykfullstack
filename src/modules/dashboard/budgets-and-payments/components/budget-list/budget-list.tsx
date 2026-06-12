'use client'

import { PiFilePdfBold, PiLinkBold, PiCalendarBold, PiUserBold } from 'react-icons/pi'
import { typeGetBudgetProps } from '../../type'

const brl = (v: number) =>
    'R$ ' + v.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export default function BudgetList({ data }: { data: typeGetBudgetProps[] }) {
    if (!data.length) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <p className="text-sm animate-pulse">Nenhum orçamento gerado ainda.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3">
            {data.map((budget) => (
                <div
                    key={budget.quoteNumber}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                                {budget.quoteNumber}
                            </span>
                            {budget.niche && (
                                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                                    {budget.niche}
                                </span>
                            )}
                        </div>

                        <p className="text-base font-bold text-gray-800 truncate mt-1">
                            {budget.projectName || 'Projeto sem nome'}
                        </p>

                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <PiUserBold size={13} />
                            <span>{budget.clientName}</span>
                            {budget.clientContact && (
                                <span className="text-gray-300 mx-1">·</span>
                            )}
                            {budget.clientContact && (
                                <span className="text-xs text-gray-400">{budget.clientContact}</span>
                            )}
                        </div>

                        {budget.validUntil && (
                            <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                                <PiCalendarBold size={11} />
                                <span>
                                    Válido até{' '}
                                    {new Date(budget.validUntil).toLocaleDateString('pt-BR')}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                        <p className="text-lg font-bold text-gray-800">{brl(budget.valuation)}</p>
                        {budget.entryAmount && (
                            <p className="text-sm font-semibold text-green-600">
                                Entrada: {brl(budget.entryAmount)}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">

                        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                            <PiFilePdfBold size={14} />
                            PDF
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}