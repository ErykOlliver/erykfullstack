import React from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { PiSealCheckFill } from 'react-icons/pi'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'

export default function Home() {
    return (
        <section id='home' className='w-full flex flex-col gap-6 h-fit px-5 pt-25 pb-35 relative'>
            <Image src={'/erykavatar.webp'} alt='Eryk Olliver Avatar' className='w-40 avatar-flutuante z-100 h-auto absolute right-2 bottom-10' width={1920} height={1080} />
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero-banner.webp"
                    alt="Fundo hero - desenvolvedor full stack"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={75}
                />
            </div>
            <div className="absolute -z-5 inset-0 bg-white/50 md:bg-white/65 lg:bg-white/30" />
            <article className='flex flex-col gap-6'>
                <Heading className='font-semibold text-black-800' level={1}>Sistemas e <span className='text-primary-500'>Apps</span> que transformam visitantes em clientes.</Heading>
                <p className='font-normal text-black-600 text-base'>Desenvolvimento sob medida em <span className='text-black-800 font-semibold'>Web</span> e <span className='text-black-800 font-semibold'>Mobile </span>para empresas que querem escalar com <span className='text-black-800 font-semibold'> tecnologia de verdade </span>.</p>
                <div className='flex w-full items-center gap-2'>
                    <button className='bg-linear-to-b from-yellow-500  to-primary-600 py-3 rounded-lg border shadow-[0_0_2px] shadow-black/70 border-white px-3 font-medium h-fit text-xs w-fit text-white'>Solicitar Orçamento</button>
                    <button className='bg-soft-white py-3 rounded-lg border border-white-pure px-5 font-medium shadow-[0_0_2px] shadow-black/70 text-black-800 text-xs'>Ver Projetos</button>
                </div>
            </article>
            <article className='w-full h-fit border gap-2.5 items-center justify-center border-white rounded-md shadow-sm shadow-black/30 p-1 flex flex-col bg-white/10 backdrop-blur-xs'>
                <div className='flex gap-1 border-b border-black-300 pb-1 justify-start items-center w-full'>
                    <div className='w-fit h-fit p-1'>
                        <PiSealCheckFill className='text-success size-6' />
                    </div>
                    <Paragraph className='text-black-600 font-normal'>Sistemas <span className='text-black-800 font-semibold'>diversificados</span> para atender a sua necessidade</Paragraph>
                </div>
                <div className='flex gap-1 border-b border-black-300 pb-1 justify-start items-center w-full'>
                    <div className='w-fit h-fit p-1'>
                        <PiSealCheckFill className='text-success size-6' />
                    </div>
                    <Paragraph className='text-black-600 font-normal'><span className='text-black-800 font-semibold'>Resultados</span> garantidos</Paragraph>
                </div>
                <div className='flex gap-1 border-b border-black-300 pb-1 justify-start items-center w-full'>
                    <div className='w-fit h-fit p-1'>
                        <PiSealCheckFill className='text-success size-6' />
                    </div>
                    <Paragraph className='text-black-600 font-normal'>Clientes <span className='text-black-800 font-semibold'> atendidos</span> no brasil</Paragraph>
                </div>
            </article>
            <Image src={'/rectangle.png'} alt='Eryk Olliver Avatar' className='w-full h-auto absolute right-0 z-100 bottom-0' width={1920} height={1080} />
        </section>
    )
}
