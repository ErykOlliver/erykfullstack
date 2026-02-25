'use client'

import { useForm } from 'react-hook-form'
import * as Dialog from '@radix-ui/react-dialog'
import { SkillCategory } from '@/src/generated/prisma/enums'
import { PiXBold, PiPlusBold, PiLightningBold, PiUsersBold } from 'react-icons/pi'
import { createSkill } from '@/src/modules/skills/services/create-skill'
import { useTransition } from 'react'
import { typeSkillsProps } from '@/src/modules/skills/type'


export default function CreateSkillModal() {
    const [isPending, startTransition] = useTransition()
    const { register, handleSubmit, reset, watch, setValue } = useForm<typeSkillsProps>({
        defaultValues: {
            category: SkillCategory.HARD
        }
    })

    const selectedCategory = watch('category')

    const onSubmit = async (data: typeSkillsProps) => {
        startTransition(async () => {
            try {
                await createSkill(data)
                reset()
            } catch (error) {
            }
        })
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-900 text-white rounded-xl font-semibold text-sm transition-all shadow-sm active:scale-95">
                    <PiPlusBold size={20} /> Adicionar Habilidade
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl z-101">

                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <Dialog.Title className="text-2xl font-bold text-gray-800">Nova Habilidade</Dialog.Title>
                            <Dialog.Description className="text-sm text-gray-500 mt-1">
                                Cadastre tecnologias ou soft skills.
                            </Dialog.Description>
                        </div>
                        <Dialog.Close className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <PiXBold size={24} />
                        </Dialog.Close>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nome da Skill</label>
                            <input
                                {...register('name', { required: true })}
                                className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-400"
                                placeholder="Ex: React, TypeScript, Liderança..."
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Categoria</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setValue('category', SkillCategory.HARD)}
                                    className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${selectedCategory === SkillCategory.HARD
                                        ? 'border-orange-500 bg-orange-50 text-orange-700 font-bold'
                                        : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200'
                                        }`}
                                >
                                    <PiLightningBold size={20} />
                                    Hard Skill
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setValue('category', SkillCategory.SOFT)}
                                    className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${selectedCategory === SkillCategory.SOFT
                                        ? 'border-orange-500 bg-orange-50 text-orange-700 font-bold'
                                        : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200'
                                        }`}
                                >
                                    <PiUsersBold size={20} />
                                    Soft Skill
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 active:scale-[0.98]"
                        >
                            Salvar Habilidade
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}