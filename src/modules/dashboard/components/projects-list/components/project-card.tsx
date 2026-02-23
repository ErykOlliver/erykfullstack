import { typeGetProjectProps } from '@/src/modules/projects'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { PiCrownSimpleFill } from 'react-icons/pi'

type props = {
    data: typeGetProjectProps
}

export default function ProjectCard({ data }: props) {
    return (
        <article className="w-full rounded-lg flex shrink-0 flex-col bg-white border border-gray-300 overflow-hidden shadow-sm relative">
            <div className="w-full flex h-8">
                <div className="w-1/2 flex items-center justify-center bg-orange-500 text-white px-2">
                    <span className="text-xs font-bold uppercase truncate">{data.applicationType}</span>
                </div>
                <div className="w-1/2 flex items-center justify-center bg-green-600 text-white px-2">
                    <span className="text-xs font-bold uppercase">{data.status}</span>
                </div>
            </div>

            <div className="p-3 flex gap-3 items-center">
                <div className="relative w-16 h-10 shrink-0 rounded-md overflow-hidden border border-gray-100">
                    <Image
                        src="/EO-GeesBanner.webp"
                        fill
                        className="object-cover"
                        alt="banner"
                    />
                </div>

                <div className="flex flex-col min-w-0 w-25 xl:w-40">
                    <h1 className="font-semibold text-gray-800 truncate">{data.title}</h1>
                </div>

                {data.isFeatured && (
                    <div className="absolute top-10 left-2 p-1 bg-black/70 rounded-full text-yellow-500 shadow-md">
                        <PiCrownSimpleFill size={14} />
                    </div>
                )}
            </div>
        </article>
    )
}
