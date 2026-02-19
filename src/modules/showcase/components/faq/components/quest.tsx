'use client'

import { Paragraph } from '@/src/shared/ui-kit/text'
import { ArrowDown } from 'lucide-react'

type QuestProps = {
    isOpen: boolean
    onToggle: () => void
}

export default function Quest({ isOpen, onToggle }: QuestProps) {
    return (
        <div className='w-full'>
            <div
                className='flex p-3 rounded-md items-center border justify-between cursor-pointer'
                onClick={onToggle}
            >
                <Paragraph className='font-medium'>
                    Ver resposta
                </Paragraph>
                <ArrowDown
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {isOpen && (
                <div className='p-3 border border-t-0 rounded-b-md'>
                    Resposta exibida
                </div>
            )}
        </div>
    )
}