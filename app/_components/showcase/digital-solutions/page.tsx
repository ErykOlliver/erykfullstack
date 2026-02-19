import React from 'react'
import { Heading, Paragraph } from '../../ui-kit/text'

export default function DigitalSolutions() {
    return (
        <section id='solutions' className='bg-linear-to-b relative py-6 from-black via-black/10 to-black'>
            <video autoPlay loop muted playsInline className='absolute -z-1 grayscale inset-0 h-full w-full object-cover'>
                <source src='/solucoes-video.webm' type="video/webm" />
            </video>
            <header className='flex flex-col items-center justify-center gap-6 w-full border'>
                <Heading level={1} className='uppercase text-white text-center font-bold'>Soluções Digitais que Escalam Negócios.</Heading>
                <Paragraph className='text-base text-center text-white/90'>Da estratégia à implementação. Construo produtos digitais com foco em performance, clareza e crescimento sustentável.</Paragraph>
            </header>
        </section>
    )
}
