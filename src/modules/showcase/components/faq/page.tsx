'use client'

import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Quest from './components/quest'
import Image from 'next/image'
import { BiConversation } from 'react-icons/bi'
import { PiChatCenteredTextLight } from 'react-icons/pi'

const faqs = [
    {
        question: 'Quanto custa desenvolver um site ou sistema?',
        response: 'O valor depende do escopo, complexidade e integrações necessárias. Após entender os objetivos do projeto e as funcionalidades desejadas, é definido um orçamento detalhado.'
    },
    {
        question: 'Quanto tempo leva para ficar pronto?',
        response: 'O prazo varia conforme o projeto. Landing pages levam em média de 1 a 3 semanas. Sistemas e plataformas mais complexas podem levar de 4 a 12 semanas, dependendo das funcionalidades.'
    },
    {
        question: 'Você trabalha com templates prontos?',
        response: 'Não trabalho com modelos genéricos. Cada projeto é estruturado de acordo com as necessidades específicas do cliente e do negócio.'
    },
    {
        question: 'O projeto já vem otimizado para SEO e performance?',
        response: 'Sim. A estrutura é desenvolvida seguindo boas práticas de performance, organização de código e SEO técnico, garantindo carregamento rápido e base adequada para posicionamento em motores de busca.'
    },
    {
        question: 'Posso solicitar novas funcionalidades depois?',
        response: 'Sim. Os sistemas são desenvolvidos de forma modular, permitindo a adição de novas funcionalidades sem necessidade de reconstruir o projeto.'
    },
    {
        question: 'Você oferece suporte após a entrega?',
        response: 'Sim. Após a entrega, são realizados ajustes necessários e é possível contratar manutenção contínua para evolução e melhorias do sistema.'
    },
    {
        question: 'Você também desenvolve aplicativos?',
        response: 'Sim. Desenvolvo aplicativos mobile, sistemas web, plataformas administrativas e outras soluções digitais conforme a necessidade do projeto.'
    }
]

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }
    return (
        <section id='faq' className='bg-white-pure py-6 flex flex-col gap-6 w-full h-fit'>
            <header className='w-full h-fit gap-6 flex flex-col px-5 items-center'>
                <Image src={'/erykquest.webp'} alt='Eryk Olliver Avatar em dúvida' className='w-40 avatar-flutuante z-100 h-auto relative' width={1920} height={1080} />
                <Heading level={1} className='text-black-800 uppercase font-bold text-center md:text-2xl'>FAQ — Perguntas Frequentes</Heading>
            </header>
            <article className='flex w-full gap-6 px-5 flex-col max-w-7xl mx-auto'>
                <div className='w-full h-fit gap-6 items-center justify-center flex flex-col'>
                    {faqs.map((f, index) => (
                        <Quest
                            key={index}
                            question={f.question}
                            response={f.response}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
                <Heading level={1} className='text-black-800 font-medium text-center md:text-2xl'>Quer entender melhor como funciona?</Heading>
                <Paragraph className='text-base text-center text-black-600 md:text-lg'>
                    Entre em contato.
                    Você explica sua necessidade e eu mostro o caminho mais viável para desenvolver.
                </Paragraph>
                {/* <button className='bg-linear-to-b flex items-center justify-center gap-1 shadow-[0_0_2px] shadow-black/70 text-white font-medium px-12 py-3 border rounded-full from-yellow-500  to-primary-600'>
                    Vamos conversar
                </button> */}
            </article>
        </section>
    )
}
