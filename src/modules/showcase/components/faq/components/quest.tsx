'use client'

import { Paragraph } from '@/src/shared/ui-kit/text'
import { ArrowDown } from 'lucide-react'
import { TiArrowSortedDown } from 'react-icons/ti'

type QuestProps = {
    question: string
    response: string
    isOpen: boolean
    onToggle: () => void
}

export default function Quest({ isOpen, onToggle, question, response }: QuestProps) {
    return (
        <div className={`w-full h-fit transition-all duration-100 ${isOpen ? 'shadow-xs shadow-primary-500' : ''} rounded-md`}>
            <div
                className='flex p-3 rounded-md items-center border-[0.5px] bg-soft-white border-white-pure shadow-xs shadow-black/15 justify-between cursor-pointer'
                onClick={onToggle}
            >
                <Paragraph className='font-medium'>
                    {question}
                </Paragraph>
                <TiArrowSortedDown
                    className={`transition-transform duration-100 text-primary-500 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {isOpen && (
                <div className='p-3 border border-primary-500 border-t-0 rounded-b-md'>
                    <Paragraph>{response}</Paragraph>
                </div>
            )}
        </div>
    )
}