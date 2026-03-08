import React from 'react'
import { Heading } from '../../../text'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

type props = {
    title: string
    children: React.ReactNode
}

export default function DropDownMenuSection({ title, children }: props) {
    return (
        <div className='flex flex-col w-full h-fit gap-3'>
            <header className='w-fit h-fit flex gap-1 items-center text-primary-500 justify-center'>
                <h1 className='text-sm uppercase font-poppins font-medium'>{title}</h1>
                <TiArrowSortedUp />
            </header>
            {children}
        </div>
    )
}
