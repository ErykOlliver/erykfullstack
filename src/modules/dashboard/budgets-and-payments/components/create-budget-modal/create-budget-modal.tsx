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
import { typeCreateBudgetProps } from '../../type'
import { postBudget } from '@/src/shared/api/budgets/budgets'

export default function CreateBudgetModal() {
    const [preview, setPreview] = useState<string | null>(null)
    const { register, handleSubmit, setValue, watch, reset } = useForm<typeCreateBudgetProps>()
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const { data } = useSession()

    const canCreateBudget = data?.user?.role
        ? hasPermission(
            data.user.role,
            Permissions.MANAGE_PROJECTS
        )
        : false

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
            formData.append('valutation', String(data.valuation))
            formData.append('entryAmount', String(data.entryAmount))
            formData.append('applicationType', data.paymentConditions || 'Nenhuma condição informada')
            formData.append("deliveryDeadline", data.deliveryDeadline || "Nenhuma data foi estimada")
            formData.append("validUntil", String(data.validUntil))


            const result = await postBudget(formData)

            if (result.status === 'success') {
                console.log("Projeto criado!")
                reset()
                setPreview(null);
                router.refresh()

            } else {
                alert("Erro: " + result)
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
                        <Dialog.Title className="text-2xl font-bold text-gray-800">Novo Projeto</Dialog.Title>
                        <Dialog.Close className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <PiXBold size={24} />
                        </Dialog.Close>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">Poster do Projeto</label>
                            <label className="relative cursor-pointer hover:opacity-90 transition-opacity">
                                <div className="w-full h-48 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center overflow-hidden">
                                    {preview ? (
                                        <img src={preview} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="text-gray-400 flex flex-col items-center">
                                            <PiUploadSimpleBold size={40} />
                                            <span className="text-xs mt-2 font-medium">Clique para subir a imagem</span>
                                        </div>
                                    )}
                                </div>
                                <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                            </label>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Título</label>
                            <input {...register('title')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: E-commerce App" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Tipo de aplicação</label>
                            <input {...register('applicationType')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: Api" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Descrição</label>
                            <textarea {...register('description')} rows={3} className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none" placeholder="Conte mais sobre o projeto..." />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-500 uppercase">Categoria</label>
                                <select {...register('category')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none">
                                    {Object.values(ProjectCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-500 uppercase">Status</label>
                                <select {...register('status')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none">
                                    {Object.values(Status).map(st => <option key={st} value={st}>{st}</option>)}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-500 uppercase">Destaque?</label>
                                <div className="flex items-center h-full">
                                    <input type="checkbox" {...register('isFeatured')} className="w-5 h-5 accent-orange-500" />
                                    <span className="ml-2 text-sm text-gray-600">Sim, destacar</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Tecnologias Utilizadas
                            </label>
                            <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100">

                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input {...register('github')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg" placeholder="URL Github" />
                            <input {...register('page')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg" placeholder="URL Demo (Page)" />
                            <input {...register('designer')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg" placeholder="Nome do Designer" />
                            <input {...register('designerPage')} className="p-3 bg-gray-50 border border-gray-200 rounded-lg" placeholder="Link do Portfólio do Designer" />
                        </div>

                        <button type="submit" disabled={isPending} className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
                            Salvar Projeto
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}