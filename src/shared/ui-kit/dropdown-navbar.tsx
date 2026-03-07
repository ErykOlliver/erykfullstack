import React, { useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

type props = {
    label: string,
    children?: React.ReactNode
}

export default function DropDownNavBar({ label, children }: props) {
    const [isOpen, onToggle] = useState(false)

    return (
        <div className='relative'>
            <li onMouseEnter={() => onToggle(true)} onMouseLeave={() => onToggle(false)} className='hover:text-primary-500 hover:cursor-pointer select-none text-md font-poppins flex items-center justify-center gap-1 text-md transition-colors duration-150 uppercase'>
                {label}
                <TiArrowSortedDown
                    size={24}
                    className={`transition-transform duration-100 ${isOpen ? ' text-primary-500' : 'rotate-180'}`}
                />
            </li>
            {!isOpen && (
                <article className='bg-soft-white/80 backdrop-blur-xs z-1000 top-15 border-b border-b-primary-600 border-x border-x-white border-t border-t-white shadow-[0_1px_2px] rounded-md shadow-black/50 w-50 absolute left-1/2 -translate-x-1/2 h-auto aspect-video'>
                    {children}
                </article>
            )}
        </div>
    )
}
