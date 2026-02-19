'use client'

import React from 'react'
import SolutionCard from './components/main-cards'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'

const cards = [
    {
        icon: '/light-bulb.svg',
        head_line: ' Estratégia & Validação',
        sub_head_line: 'Antes de construir, validamos.',
        description: 'Estruturação de produto, arquitetura inicial e definição de experiência para evitar retrabalho e reduzir risco.',
        solution_list:
            [
                'Prototipação UI/UX',
                'Wireframes e fluxos',
                'Arquitetura de informação',
                'Planejamento técnico',
            ]
    },
    {
        icon: '/devweb.svg',
        head_line: 'Desenvolvimento Web',
        sub_head_line: 'Sites e sistemas com base sólida.',
        description: 'Desenvolvimento front-end e back-end focado em performance, SEO e escalabilidade.',
        solution_list:
            [
                'Landing Pages de alta conversão',
                'E-commerce estruturado',
                'Portais e dashboards',
                'APIs e integrações',
            ]
    },
    {
        icon: '/devmobile.svg',
        head_line: 'Aplicações Mobile',
        sub_head_line: 'Experiência fluida em qualquer dispositivo.',
        description: 'Aplicações Android e iOS com foco em performance, estabilidade e experiência do usuário.',
        solution_list:
            [
                'Apps institucionais',
                'Plataformas SaaS',
                'Integrações com backend',
                'Publicação nas stores',
            ]
    }
]

export default function DigitalSolutions() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

    useEffect(() => {
        if (inView) {
            setShouldLoadVideo(true)
        }
    }, [inView])
    return (
        <section id='solutions' ref={ref} className='bg-black/50 relative py-6 flex flex-col w-full h-fit gap-6 items-center justify-center '>
            {shouldLoadVideo && (
                <video autoPlay loop muted playsInline poster="/solucoes-image.png" className=' absolute -z-1 inset-0 h-full w-full object-cover'>
                    <source src='/solucoes-video.webm' type="video/webm" />
                </video>
            )}
            <header className='flex flex-col items-center justify-center px-5 gap-6 w-full'>
                <Heading level={1} className='uppercase text-white text-center font-bold'>Soluções Digitais que Escalam Negócios.</Heading>
                <Paragraph className='text-base text-center text-white/90'>Da estratégia à implementação. Construo produtos digitais com foco em performance, clareza e crescimento sustentável.</Paragraph>
            </header>
            <article className='flex flex-col items-center gap-6 justify-center w-full h-fit px-5'>
                {cards.map((c, i) => (
                    <SolutionCard key={i} n_position={i + 1} head_line={c.head_line} sub_head_line={c.sub_head_line} description={c.description} icon={c.icon} solution_list={c.solution_list} />
                ))}
            </article>
        </section>
    )
}
