import { Facebook, Github, Instagram } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { BiLogoGithub } from 'react-icons/bi'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='bg-black border-t border-white/30 grid w-full h-fit items-center gap-5 px-6 pt-12 justify-center'>
            <div className='max-w-7xl mx-auto gap-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:gap-5 h-full items-center justify-center w-full '>
                <Image src={'/wlogomarca.webp'} className='w-60 h-auto' alt='eryk olliver logomarca' width={300} height={69} />
                <article className='w-full h-full flex flex-col gap-5'>
                    <h1 className='text-sm select-none text-primary-500 leading-snug font-medium uppercase'>Desenvolvimento Web</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-2.5 items-start justify-center'>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Web Apps e Sistemas</a></li>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Landing Pages</a></li>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Sites Institucionais e Portfólios</a></li>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-5'>
                    <h1 className='text-sm select-none text-primary-500 leading-snug font-medium uppercase'>E-commerce e Plataformas</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-2.5 items-start justify-center'>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Lojas Virtuais com Checkout Completo</a></li>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Painéis Administrativos e Dashboards</a></li>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-5'>
                    <h1 className='text-sm select-none text-primary-500 leading-snug font-medium uppercase'>Backend e Integrações</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-2.5 items-start justify-center'>
                            <li className='hover:text-zinc-300 text-sm'><a href="">APIs e Arquitetura Backend</a></li>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Integração com Plataformas e Serviços</a></li>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-5'>
                    <h1 className='text-sm select-none text-primary-500 leading-snug font-medium uppercase'>Performance e Otimização</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-2.5 items-start justify-center'>
                            <li className='hover:text-zinc-300 text-sm'><a href="">SEO Técnico para Sites</a></li>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Otimização de Performance</a></li>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-5'>
                    <h1 className='text-sm select-none text-primary-500 leading-snug font-medium uppercase'>Aplicações Mobile</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-2.5 items-start justify-center'>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Aplicativos Modernos para Dispositivos Móveis</a></li>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-5'>
                    <h1 className='text-sm select-none text-primary-500 leading-snug font-medium uppercase'>Mais opções</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex flex-col gap-2.5 items-start justify-center'>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Portfólio</a></li>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Quem é Eryk Olliver</a></li>
                            <li className='hover:text-zinc-300 text-sm'><a href="">Contato</a></li>
                        </ul>
                    </nav>
                </article>
                <article className='w-full h-full flex flex-col gap-5'>
                    <h1 className='text-sm select-none text-primary-500 leading-snug font-medium uppercase'>Siga-nos</h1>
                    <nav className=' w-full h-fit text-zinc-500'>
                        <ul className='flex gap-2.5 items-center justify-start'>
                            <li className='hover:text-zinc-300 '><a href=""><Instagram className='size-6' /></a></li>
                            <li className='hover:text-zinc-300 '><a href=""><Facebook className='size-6' /></a></li>
                            <li className='hover:text-zinc-300 '><a href=""><FaGithub className='size-6' /></a></li>
                            <li className='hover:text-zinc-300 '><a href=""><FaLinkedin className='size-6' /></a></li>
                            <li className='hover:text-zinc-300 '><a href=""><FaYoutube className='size-6' /></a></li>
                        </ul>
                    </nav>
                </article>
            </div>

            <div className='border-t border-white/30 flex items-center justify-center p-5'>
                <p className='text-black-600 text-center'>© 2026 Eryk Olliver. Todos direitos reservados.</p>
            </div>
        </footer>
    )
}
