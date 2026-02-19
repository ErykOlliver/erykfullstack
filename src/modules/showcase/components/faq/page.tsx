'use client'

import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Quest from './components/quest'

const faqs = [
    {},
]

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }
    return (
        <section id='faq' className='bg-white-pure py-6 flex flex-col gap-6 w-full h-fit'>
            <header className='w-full h-fit gap-6 flex flex-col px-5'>
                <Heading level={1} className='text-black-800 uppercase font-bold text-center'>FAQ — Perguntas Frequentes</Heading>
            </header>
            <article className='flex gap-6 px-5 flex-col'>
                {[0, 1, 2, 3].map((_, index) => (
                    <Quest
                        key={index}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </article>
        </section>
    )
}
