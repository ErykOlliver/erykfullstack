import { Heading } from '@/src/shared/ui-kit/text'
import Image from 'next/image'
import React from 'react'
import ContactForm from './components/main-form'

export default function Contact() {
    return (
        <section id='contact' className='bg-white-pure py-6 flex flex-col gap-6 w-full h-fit'>
            <header className='w-full items-center justify-center flex flex-col'>
                <Heading level={1}>Inicio de parceria</Heading>
                <Image src={'/erykphone.webp'} alt='Eryk Olliver Avatar com celular' className='w-40 avatar-flutuante z-100 h-auto relative' width={1920} height={1080} />
            </header>
            <ContactForm />
        </section>
    )
}
