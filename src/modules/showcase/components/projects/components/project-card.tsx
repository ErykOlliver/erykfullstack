import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function ProjectCard() {
    return (
        <article className='aspect-video w-full shadow-black/25 flex items-end rounded-lg border-white border-2 shadow-md h-auto relative'>
            <Image src={'/EO-GeesBanner.webp'} fill className='object-cover rounded-lg' alt='banner' />
            <div className='absolute z-10 px-2 py-0.5 shadow-xs shadow-black/50 text-white flex gap-1 bg-success rounded-tr-lg rounded-bl-lg items-center justify-center right-0 top-0'> <Paragraph>Concluido</Paragraph> <Check size={16} /></div>
            <div className='absolute z-10 px-2 py-0.5 shadow-xs shadow-black/50 left-0 bottom-1/2 -translate-y-1/2 bg-primary-500'><Paragraph className='text-white'>Landing Page</Paragraph></div>
            <article className='border-t-2 border-black-300/50 backdrop-blur-sm rounded-b-lg p-2 relative w-full h-fit bg-black/25 '>
                <Heading level={1} className='font-medium text-white'>Geesh</Heading>
                <Paragraph className='line-clamp-2 text-white/70'>O Geesh é um aplicativo desenvolvido como projeto</Paragraph>
            </article>
        </article>
    )
}
