'use client'

import { JetBrains_Mono, Poppins } from 'next/font/google'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ContactForm from './components/main-form'
import { useInView } from 'react-intersection-observer'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Contact() {
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
        <section ref={ref} id='contact' className='bg-linear-to-b from-white via-off-white/95 to-off-white py-6 flex flex-col relative items-center justify-center gap-6 w-full h-fit'>
            {shouldLoadVideo && (
                <video autoPlay loop muted playsInline poster="/solucoes-image.png" className=' absolute -z-1 inset-0 h-full w-full object-cover'>
                    <source src='/fogbg.webm' type="video/webm" />
                </video>
            )}
            <header className='w-full items-center justify-center flex flex-col gap-6 max-w-7xl mx-auto'>
                <Paragraph className='uppercase text-primary-500 font-medium md:text-lg'>Inicio de parceria</Paragraph>
                <Image src={'/erykphone.webp'} alt='Eryk Olliver Avatar com celular' className='w-40 md:w-70 avatar-flutuante z-100 h-auto relative' width={1920} height={1080} />
            </header>
            <article className='px-5 w-full h-fit max-w-7xl mx-auto'>
                <ContactForm />
            </article>
            <article className='flex flex-col gap-3 items-center justify-center w-full h-fit px-5 max-w-7xl mx-auto'>
                <h1 className={`font-bold uppercase text-center text-2xl md:text-3xl ${poppins.className}`}>Vamos estruturar seu <span className='text-primary-500'> próximo projeto digital. </span></h1>
                <p className={`text-center text-black-600 text-sm md:text-lg ${poppins.className}`}>Se você busca performance, clareza técnica e uma base sólida para escalar, vamos conversar.</p>
            </article>
        </section>
    )
}
