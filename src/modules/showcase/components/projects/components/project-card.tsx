import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { PiCrownSimpleFill } from 'react-icons/pi'

export default function ProjectCard() {
    return (
        <article className='group aspect-video w-full hover:shadow-[0_0_15px_2px] transition-all duration-150 hover:border-primary-500 hover:shadow-primary-500 overflow-hidden hover:cursor-pointer shadow-black/25 flex select-none items-end rounded-lg border-white border-2 shadow-md relative'>
            <Image src={'/EO-GeesBanner.webp'} fill className='object-cover rounded-lg transition-transform duration-500 group-hover:scale-110' alt='banner' />
            <div className='absolute z-10 px-2 py-0.5 shadow-xs shadow-black/50 text-black flex gap-1 bg-linear-to-r from-yellow-600 to-yellow-700 rounded-b-lg items-center justify-center left-2 top-0'> <PiCrownSimpleFill size={16} /> <Paragraph className='md:text-sm'>Destaque</Paragraph> </div>
            <div className='absolute z-10 px-2 py-0.5 shadow-xs shadow-black/50 text-white flex gap-1 bg-success rounded-tr-lg rounded-bl-lg items-center justify-center right-0 top-0'> <Paragraph className='md:text-sm'>Concluido</Paragraph> <Check size={16} /></div>
            <div className='absolute z-10 px-2 py-0.5 shadow-xs shadow-black/50 left-0 bottom-1/2 -translate-y-1/2 xl:-translate-y-1/8 bg-primary-500 max-w-1/2'><Paragraph className='text-white md:text-sm wrap-break-word'>Landing Pages</Paragraph></div>
            <article className='border-t-2 border-black-300/50 backdrop-blur-sm rounded-b-lg p-2 relative w-full h-fit bg-black/25 '>
                <Heading level={1} className='font-medium text-white md:text-2xl'>Geesh</Heading>
                <Paragraph className='line-clamp-2 text-white/80 md:text-sm'>O Geesh é um aplicativo desenvolvido como projeto</Paragraph>
            </article>
        </article>
    )
}
