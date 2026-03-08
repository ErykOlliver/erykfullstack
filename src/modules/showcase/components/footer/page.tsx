import { Facebook, Github, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoGithub } from 'react-icons/bi'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='bg-black border-t border-white/30 grid w-full h-fit items-center gap-3 px-6 pt-12 justify-center'>
            <div className='max-w-7xl mx-auto gap-3 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:gap-3 h-full items-center justify-center w-full '>
                <Image src={'/wlogomarca.webp'} className='w-60 h-auto' alt='eryk olliver logomarca' width={300} height={69} />
                <article className='w-full h-full flex flex-col gap-3'>
                    <h1 className='text-sm select-none text-primary-500 font-poppins leading-snug font-medium uppercase'>Desenvolvimento Web</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-1.5 items-start justify-center'>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>Web Apps e Sistemas</Link>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>Landing Pages</Link>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>Sites Institucionais e Portfólios</Link>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-3'>
                    <h1 className='text-sm select-none text-primary-500 font-poppins leading-snug font-medium uppercase'>E-commerce e Plataformas</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-1.5 items-start justify-center'>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>Lojas Virtuais com Checkout Completo</Link>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>Painéis Administrativos e Dashboards</Link>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-3'>
                    <h1 className='text-sm select-none text-primary-500 leading-snug font-poppins font-medium uppercase'>Backend e Integrações</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-1.5 items-start justify-center'>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>APIs e Arquitetura Backend</Link>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>Integração com Plataformas e Serviços</Link>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-3'>
                    <h1 className='text-sm select-none text-primary-500 font-poppins leading-snug font-medium uppercase'>Performance e Otimização</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-1.5 items-start justify-center'>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>SEO Técnico para Sites</Link>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>Otimização de Performance</Link>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-3'>
                    <h1 className='text-sm select-none text-primary-500 font-poppins leading-snug font-medium uppercase'>Aplicações Mobile</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-1.5 items-start justify-center'>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>Aplicativos Modernos para Dispositivos Móveis</Link>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-3'>
                    <h1 className='text-sm select-none text-primary-500 font-poppins leading-snug font-medium uppercase'>Mais opções</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-1.5 items-start justify-center'>
                            <Link href={'/portfolio'} className='hover:text-zinc-300 font-poppins text-xs'>Portfólio</Link>
                            <Link href={''} className='hover:text-zinc-300 font-poppins text-xs'>Quem é Eryk Olliver</Link>
                            <Link href={'/contact'} className='hover:text-zinc-300 font-poppins text-xs'>Contato</Link>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-3'>
                    <h1 className='text-sm select-none text-primary-500 leading-snug font-medium uppercase'>Siga-nos</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex gap-2.5 items-center justify-start'>
                            <li className='hover:text-zinc-300 '><Instagram className='size-6' /></li>
                            <li className='hover:text-zinc-300 '><Facebook className='size-6' /></li>
                            <li className='hover:text-zinc-700 '><FaGithub className='size-6' /></li>
                            <li className='hover:text-zinc-300 '><FaLinkedin className='size-6' /></li>
                            <li className='hover:text-zinc-300 '><FaYoutube className='size-6' /></li>
                        </ul>
                    </nav>
                </article>
            </div>

            <div className='border-t border-white/30 flex items-center justify-center p-5'>
                <p className='text-black-600 text-center font-poppins text-xs'>© 2026 Eryk Olliver. Todos direitos reservados.</p>
            </div>
        </footer>
    )
}
