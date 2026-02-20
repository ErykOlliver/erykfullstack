import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import Image from 'next/image'
import React from 'react'
import ContactForm from './components/main-form'

export default function Contact() {
    return (
        <section id='contact' className='bg-off-white py-6 flex flex-col gap-6 w-full h-fit'>
            <header className='w-full items-center justify-center flex flex-col'>
                <Paragraph className='uppercase text-primary-500 font-medium'>Inicio de parceria</Paragraph>
                <Image src={'/erykphone.webp'} alt='Eryk Olliver Avatar com celular' className='w-40 avatar-flutuante z-100 h-auto relative' width={1920} height={1080} />
            </header>
            <article className='px-5 w-full h-fit'>
                <ContactForm />
            </article>
        </section>
    )
}
