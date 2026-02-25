'use client'

import React from 'react'
import { typeKpiCard } from '../../../type'
import CountUp from 'react-countup'

export default function KpiCard({ amount, icon, title }: typeKpiCard) {
    return (
        <article className='group flex flex-col justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-500/50 transition-all duration-300 min-h-40 w-full'>

            <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors'>
                    {icon}
                </div>

                <span className='text-sm font-medium text-gray-500 truncate'>
                    {title}
                </span>
            </div>

            <div className='mt-4 flex items-baseline gap-2'>
                <h2 className='text-4xl md:text-5xl font-bold tracking-tight text-gray-900'>
                    <CountUp
                        end={amount}
                        duration={2.5}
                        separator="."
                        suffix={title === "Progresso" ? "%" : ""}
                    />
                </h2>

            </div>
        </article>
    )
}