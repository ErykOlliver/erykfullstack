'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import * as Dialog from '@radix-ui/react-dialog'
import { PiXBold, PiPlusBold, PiShareNetworkBold, PiLinkBold } from 'react-icons/pi'
import { typeNetworkProps } from '@/src/modules/network/type'
import { createNetwork } from '@/src/modules/network/services/create-network'
import { useSession } from 'next-auth/react'
import { hasPermission } from '@/src/shared/libs/has-permission'
import { Permissions } from '@/src/shared/libs/permissions-enum'

export default function CreateNetworkModal() {
    const { register, handleSubmit, reset } = useForm<typeNetworkProps>()
    const { data } = useSession()

    const canCreateProject = data?.user?.role
        ? hasPermission(
            data.user.role,
            Permissions.MANAGE_PROJECTS
        )
        : false


    const onSubmit = async (data: typeNetworkProps) => {
        if (!canCreateProject) {
            alert("Sem permissão")
            return
        }

        try {
            console.log("Cadastrando Rede Social:", data)
            createNetwork({ name: data.name, link: data.link })
            reset()
        } catch (error) {
            console.error("Erro ao salvar rede:", error)
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button
                    disabled={!canCreateProject}
                    className={`
                                    flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm
                                    ${canCreateProject
                            ? 'bg-zinc-800 hover:bg-zinc-900 text-white active:scale-95'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                                `}
                >
                    <PiShareNetworkBold size={20} /> Redes
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl z-101">

                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <Dialog.Title className="text-2xl font-bold text-gray-800">Nova Rede Social</Dialog.Title>
                            <Dialog.Description className="text-sm text-gray-500 mt-1">
                                Adicione links como LinkedIn, GitHub ou Instagram.
                            </Dialog.Description>
                        </div>
                        <Dialog.Close className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <PiXBold size={24} />
                        </Dialog.Close>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nome da Rede</label>
                            <div className="relative">
                                <PiShareNetworkBold className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    {...register('name', { required: true })}
                                    className="w-full pl-10 p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                    placeholder="Ex: LinkedIn"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">URL do Perfil</label>
                            <div className="relative">
                                <PiLinkBold className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    {...register('link', { required: true })}
                                    className="w-full pl-10 p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                    placeholder="https://linkedin.com/in/usuario"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
                        >
                            Salvar Rede Social
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}