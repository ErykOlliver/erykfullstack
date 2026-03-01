'use client'

import { deleteProject } from '@/src/modules/projects/services/delete-project'
import { typeGetProjectProps } from '@/src/modules/projects/type'
import Image from 'next/image'
import React, { useTransition } from 'react'
import { PiCrownSimpleFill, PiPencilSimple, PiTrash, PiEye } from 'react-icons/pi'

type props = {
    data: typeGetProjectProps
}

export default function ProjectCard({ data }: props) {
    const [isPending, startTransition] = useTransition()

    const handleDelete = () => {
        startTransition(async () => {
            await deleteProject(data.id)
        })
    }

    return (
        <article className="group w-full min-h-27.5 rounded-xl flex flex-col bg-white border border-gray-200 overflow-hidden hover:shadow-lg hover:border-orange-300 transition-all duration-300 relative shrink-0">
            <div className="w-full flex h-5 text-[9px] font-bold tracking-widest text-white uppercase">
                <div className="flex-1 flex items-center justify-center bg-zinc-800 px-2">
                    {data.applicationType}
                </div>
                <div className={`flex-1 flex items-center bg-primary-500 justify-center px-2`}>
                    {data.status}
                </div>
            </div>

            <div className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                    <div className="relative w-16 h-12 shrink-0 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                        <Image
                            src={data.poster}
                            alt={data.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {data.isFeatured && (
                            <div className="absolute top-0 left-0 p-0.5 bg-black/60 rounded-br-lg">
                                <PiCrownSimpleFill className="text-yellow-400" size={12} />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col min-w-0">
                        <h3 className="font-bold text-gray-800 truncate text-sm md:text-base group-hover:text-orange-600 transition-colors">
                            {data.title}
                        </h3>
                        <p className="text-[10px] text-gray-400 font-medium">ID: {data.id.substring(0, 8)}...</p>
                    </div>
                </div>

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-full transition-colors" title="Ver">
                        <PiEye size={18} />
                    </button>
                    <button className="p-2 hover:bg-orange-50 text-orange-600 rounded-full transition-colors" title="Editar">
                        <PiPencilSimple size={18} />
                    </button>
                    <button disabled={isPending} onClick={handleDelete} className="p-2 hover:bg-red-50 text-red-600 rounded-full transition-colors" title="Excluir">
                        <PiTrash size={18} />
                    </button>
                </div>
            </div>
        </article>
    )
}