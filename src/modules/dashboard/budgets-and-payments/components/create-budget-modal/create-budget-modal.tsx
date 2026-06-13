'use client'

import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as Dialog from '@radix-ui/react-dialog'
import { Status, ProjectCategory } from '@/src/generated/prisma/enums'
import { PiXBold, PiUploadSimpleBold, PiPlusBold, PiCheckBold } from 'react-icons/pi'
import { CircuitBoard } from 'lucide-react'
import { postProject } from '@/src/shared/api/projects/projects'
import { useRouter } from "next/navigation"
import { uploadFile } from '@/supabase-client'
import { useSession } from "next-auth/react"
import { hasPermission } from '@/src/shared/libs/has-permission'
import { Permissions } from '@/src/shared/libs/permissions-enum'
import { postBudget } from '@/src/shared/api/budgets/budgets'
import { typeCreateBudgetProps } from '../../type'

export default function CreateBudgetModal() {
    const [preview, setPreview] = useState<string | null>(null)
    const [entryAmount, setEntryAmount] = useState<number>(0)
    const { register, handleSubmit, setValue, watch, reset } = useForm<typeCreateBudgetProps>()
    const [isPending, startTransition] = useTransition()
    const valuation = watch("valuation")
    const router = useRouter()

    const { data } = useSession()

    const canCreateBudget = data?.user?.role
        ? hasPermission(
            data.user.role,
            Permissions.MANAGE_BUDGETS
        )
        : false

    const entryAmountPlaceholder = valuation
        ? (Number(valuation) * 0.5).toFixed(2)
        : "Valor da entrada";

    const onSubmit = async (data: typeCreateBudgetProps) => {
        if (!canCreateBudget) {
            alert("Sem permissão")
            return
        }

        try {

            const formData = new FormData()
            formData.append('projectName', data.projectName || "Não Informado")
            formData.append('clienteName', data.clientName)
            formData.append('clienteContact', data.clientContact || "Não informado")
            formData.append('niche', data.niche || "Não informado")
            formData.append('description', data.description || 'Sem Descrição')
            formData.append('features', String(data.features || []))
            formData.append('valuation', String(data.valuation))
            formData.append('entryAmount', String(entryAmountPlaceholder))
            formData.append('applicationType', data.paymentConditions || 'Nenhuma condição informada')
            formData.append("deliveryDeadline", data.deliveryDeadline || "Nenhuma data foi estimada")
            formData.append("validUntil", String(data.validUntil))


            const result = await postBudget(formData)

            if (result.status === 'success') {
                console.log("Orçamento criado!")
                reset()
                router.refresh()

            } else {
                alert("Erro: " + result)
                console.log("Orçamento não foi criado")
            }


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button
                    disabled={!canCreateBudget}
                    className={`
            flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm
            ${canCreateBudget
                            ? 'bg-orange-500 hover:bg-orange-600 text-white active:scale-95'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
        `}
                >
                    <PiPlusBold size={20} />
                    Gerar Orçamento
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-8 shadow-2xl z-101 custom-scrollbar">

                    <div className="flex justify-between items-center mb-6">
                        <Dialog.Title className="text-2xl font-bold text-gray-800">Gerar orçamento</Dialog.Title>
                        <Dialog.Close className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <PiXBold size={24} />
                        </Dialog.Close>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Nome do projeto</label>
                            <input {...register('projectName')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: E-commerce App" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Nome do cliente</label>
                            <input {...register('clientName')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: John Doe" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Contato do cliente</label>
                            <input {...register('clientContact')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="(Link do whatsapp ou instagram)" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Descrição</label>
                            <textarea {...register('description')} rows={3} className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none" placeholder="Conte mais sobre o projeto..." />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-500 uppercase">Nicho</label>
                                <input {...register('niche')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: Barbeiro, Designer" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-500 uppercase">Recursos(Separar com ",")</label>
                                <input {...register('features')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: Serviço de autenticação, Painel de controle" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Condições de Pagamento</label>
                            <textarea {...register('paymentConditions')} rows={3} className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none" placeholder="Conte mais sobre a negociação..." />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input  {...register('valuation')} type='number' className="p-3 bg-gray-50 border border-gray-200 rounded-lg" placeholder="Valor Estimado" />
                            <input disabled {...register('entryAmount')} type='number' className="p-3 bg-gray-50 border border-gray-200 rounded-lg" placeholder={entryAmountPlaceholder} />
                            <input {...register('deliveryDeadline')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg" placeholder="Prazo de Entrega" />
                            <input {...register('validUntil')} type='date' className="p-3 bg-gray-50 border border-gray-200 rounded-lg" placeholder="Tempo de Validez" />
                        </div>

                        <button type="submit" disabled={isPending} className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
                            Gerar oçamento
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}