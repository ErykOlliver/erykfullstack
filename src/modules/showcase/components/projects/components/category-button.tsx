import React from 'react'
import { CategoryButtonProps } from '../type/types'
import { selectedProject } from '@/src/shared/utils/enums'

export default function CategoryButton({ text, category, onClick, value }: CategoryButtonProps) {
    const selectedCategory = () => {
        return category === value ? true : false
    }

    return (
        <button
            onClick={() => onClick()}
            className={`${selectedCategory() ? 'opacity-100 hover:opacity-100 shadow-[0_0_15px_2px] shadow-primary-500 border border-white' : 'opacity-30 shadow-none'} transition-all duration-150 hover:opacity-50 font-poppins hover:cursor-pointer rounded-lg p-1.5 md:p-2 xl:p-3 text-xs md:text-sm xl:text-xl bg-primary-500 font-medium text-white`}>
            {text}
        </button>
    )
}
