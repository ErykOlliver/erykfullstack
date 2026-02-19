
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const faqs = [
    {testimonial: 'A entrega foi além do esperado. O aplicativo ficou estável, intuitivo e com ótima performance. A comunicação durante o projeto foi objetiva e técnica, o que trouxe segurança em todas as decisões.', name: 'Eryk Olliver', projectName: 'Geesh'},
]

export default function Faq() {
    return (
        <section id='testimonials' className='bg-white-pure py-6 flex flex-col gap-6 w-full h-fit'>
            <header className='w-full h-fit gap-6 flex flex-col px-5'>
                <Heading level={1} className='text-black-800 uppercase font-bold text-center'>FAQ — Perguntas Frequentes</Heading>
            </header>
            <article className=''>
                
            </article>
        </section>
    )
}
