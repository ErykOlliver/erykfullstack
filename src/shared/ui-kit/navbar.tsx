'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Heading, Paragraph } from './text'

export default function NavBar() {
    const [enabledMenu, setEnabledMenu] = useState(false)

    return (
        <>
            <div className='fixed top-0 bg-white/30 border-b z-1000 shadow-sm border-white w-full h-fit p-5 backdrop-blur-xs'>
                <div className='w-full h-fit items-center flex justify-between max-w-7xl mx-auto'>
                    <Image src={'/logomarca.webp'} className='w-40 h-auto' alt='eryk olliver logomarca' width={300} height={69} />
                    <div className='hidden xl:block h-fit'>
                        <nav className='h-fit'>
                            <ul className='flex  gap-4'>
                                <li className='hover:text-primary-500 font-poppins text-md transition-colors duration-150 uppercase'><a href="">soluções</a></li>
                                <li className='hover:text-primary-500 font-poppins text-md transition-colors duration-150 uppercase'><a href="">portfólio</a></li>
                                <li className='hover:text-primary-500 font-poppins text-md transition-colors duration-150 uppercase'><a href="">sobre</a></li>
                                <li className='hover:text-primary-500 font-poppins text-md transition-colors duration-150 uppercase'><a href="">contato</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className='xl:hidden'>
                        <Menu className='size-8' onClick={() => setEnabledMenu(true)} />
                    </div>
                </div>
            </div>
            {enabledMenu && (
                <>
                    <div onClick={() => setEnabledMenu(false)} className='bg-black/40 w-screen h-screen z-2000 fixed' />

                    <article className=' p-5 w-fit h-full bg-soft-white right-0 top-0 shadow-2xl border-l-2 border-white fixed z-2000'>
                        <header className='w-full'>
                            <X className='bg-black size-8 text-white rounded-full p-1' onClick={() => setEnabledMenu(false)} />
                        </header>
                    </article>
                </>
            )}
        </>
    )
}
