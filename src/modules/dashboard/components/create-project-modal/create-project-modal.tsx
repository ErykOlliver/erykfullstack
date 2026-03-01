'use client'

import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as Dialog from '@radix-ui/react-dialog'
import { Status, ProjectCategory } from '@/src/generated/prisma/enums'
import { PiXBold, PiUploadSimpleBold, PiPlusBold, PiCheckBold } from 'react-icons/pi'
import { CircuitBoard } from 'lucide-react'
import { createProject } from '@/src/modules/projects/services/create-project'
import { typeProjectProps } from '@/src/modules/projects/type'
import { typeGetSkillsProps } from '@/src/modules/skills/type'

interface Props {
    availableSkills: typeGetSkillsProps[]
}

export default function CreateProjectModal({ availableSkills }: Props) {
    const [preview, setPreview] = useState<string | null>(null)
    const [selectedSkills, setSelectedSkills] = useState<string[]>([])
    const { register, handleSubmit, setValue, watch, reset } = useForm<typeProjectProps>()
    const [isPending, startTransition] = useTransition()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
            setValue('poster', file as any)
        }
    }

    const toggleSkill = (skillName: string) => {
        setSelectedSkills(prev =>
            prev.includes(skillName)
                ? prev.filter(s => s !== skillName)
                : [...prev, skillName]
        )
    }

    const onSubmit = async (data: typeProjectProps) => {
        startTransition(async () => {
            const formData = new FormData()

            formData.append('title', data.title)
            formData.append('description', data.description)
            formData.append('category', data.category)
            formData.append('status', data.status)
            formData.append('isFeatured', String(data.isFeatured))
            formData.append('github', data.github || '')
            formData.append('page', data.page || '')
            formData.append('designer', data.designer || '')
            formData.append('designerPage', data.designerPage || '')
            formData.append('applicationType', data.applicationType || '')

            if (data.poster) {
                formData.append('poster', data.poster)
            }

            formData.append('skills', JSON.stringify(selectedSkills))

            const result = await createProject(formData)

            reset()

            if (result.status === 'success') {
                console.log("Projeto criado!")
            } else {
                alert("Erro: " + result.error)
            }
        })
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-sm transition-all shadow-sm active:scale-95">
                    <PiPlusBold size={20} /> Novo Projeto
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
                                {availableSkills.map((skill) => {
                                    const isSelected = selectedSkills.includes(skill.name);
                                    return (
                                        <button
                                            key={skill.id}
                                            type="button"
                                            onClick={() => toggleSkill(skill.name)}
                                            className={`
                                                flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all
                                                ${isSelected
                                                    ? 'bg-orange-500 border-orange-600 text-white shadow-md'
                                                    : 'bg-white border-gray-200 text-gray-600 hover:border-orange-300'}
                                            `}
                                        >
                                            {isSelected ? <PiCheckBold /> : <CircuitBoard className="text-gray-400" />}
                                            {skill.name}
                                        </button>
                                    )
                                })}
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