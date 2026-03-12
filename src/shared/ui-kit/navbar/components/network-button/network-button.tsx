import React from 'react'

type props = {
    icon: React.ReactNode,
    label: string
}

export default function NetworkButton({ icon, label }: props) {
    return (
        <div className='relative group'>
            <div className='w-fit h-fit group-hover:-translate-y-1 group-hover:shadow-md shadow-primary-700 group-hover:cursor-pointer p-1.5 transition-all duration-150 flex items-center justify-center rounded-md group-hover:text-white group-hover:bg-primary-500 text-black-800'>
                {icon}
            </div>
            <span className='hidden border transition-all duration-150 border-zinc-200 border-b-3 border-b-primary-500/50 shadow-md left-1/2 bg-white  p-2 rounded-md -translate-x-1/2 top-12 group-hover:block absolute'>{label}</span>
        </div>
    )
}
