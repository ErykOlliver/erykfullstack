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
        <div className={`w-full h-fit transition-all duration-100 rounded-md`}>
            <div
                className={`flex p-3 rounded-md items-center border-[0.5px] bg-soft-white ${isOpen ? 'border-primary-500' : 'border-white-pure'} shadow-xs shadow-black/15 justify-between cursor-pointer`}
                onClick={onToggle}
            >
                <Paragraph className='font-medium'>
                    {question}
                </Paragraph>
                <div className='w-fit h-fit'>
                    <TiArrowSortedDown
                        size={ 24}
                        className={`transition-transform duration-100 text-primary-500 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>

            {isOpen && (
                <div className='p-3 border border-primary-500 border-t-0 rounded-b-md'>
                    <Paragraph className='font-normal text-black-600/80'>{response}</Paragraph>
                </div>
            )}
        </div>
    )
}