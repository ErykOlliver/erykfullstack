import { typeGetProjectProps } from '@/src/modules/projects'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { PiCrownSimpleFill } from 'react-icons/pi'

type props = {
    data: typeGetProjectProps
}

export default function SkillCard({ data }: props) {
    return (
        <article className="w-full rounded-lg flex shrink-0 bg-white border p-3 border-gray-300 overflow-hidden shadow-sm relative">
                <div className="flex flex-col min-w-0 w-25 xl:w-40">
                    <h1 className="font-semibold text-gray-800 truncate">{data.title}</h1>
                </div>
        </article>
    )
}
