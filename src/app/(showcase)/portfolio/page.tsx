import Footer from '@/src/modules/showcase/components/footer/page'
import FullProjects from '@/src/modules/showcase/components/projects/fullpage'
import { getPaginationProjects } from '@/src/shared/api/projects/projects'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import React from 'react'

export default async function Portfolio() {
    return (
        <section className='w-full flex flex-col items-start justify-center h-fit '>
            <article className='w-full h-fit pb-25 px-10 pt-45 bg-linear-to-r from-primary-700 via-orange-500 to-orange-400 text-white flex flex-col items-center justify-center gap-3'>
                <Heading level={4} className='md:text-6xl uppercase font-black text-center'>meu portfólio</Heading>
                <Paragraph className='xl:w-1/2 text-center font-medium text-yellow-400 md:text-sm xl:text-xl'>
                    Confira alguns dos meus melhores projetos:
                </Paragraph>
                <Paragraph className='xl:w-1/2 text-center md:text-lg'>
                Veja como transformo ideias em soluções digitais de alta performance e conversão. Cada projeto é uma parceria que gerou resultados reais. Explore os filtros para navegar pelas minhas áreas de atuação.
                </Paragraph>
            </article>
            <FullProjects data={await getPaginationProjects()} />
            <Footer />
        </section>
    )
}
