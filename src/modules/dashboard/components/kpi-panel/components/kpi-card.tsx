import React from 'react'
import { typeKpiCard } from '../../../type'
import { Heading } from '@/src/shared/ui-kit/text'
import { BiUserPlus } from 'react-icons/bi'


export default function KpiCard({ amount, icon, title }: typeKpiCard) {
    return (
        <article className='flex flex-col items-start justify-between aspect-video w-full h-auto border border-black-300 p-2 md:p-4 xl:p-5 rounded-lg'>
            <div className='flex gap-1 items-center justify-start w-full h-fit'>
                <div className='w-fit h-fit p-1 text-white bg-black/50 rounded-full'>
                    {icon}
                </div>
                <p className='text-xs md:text-sm xl:text-lg'>{title}</p>
            </div>
            <h1 className='text-2xl font-bold md:text-6xl xl:text-8xl'>{amount}</h1>
        </article>
    )
}
