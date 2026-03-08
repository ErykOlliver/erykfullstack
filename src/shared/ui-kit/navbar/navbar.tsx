'use client'

import { Facebook, Instagram, Menu, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Heading, Paragraph } from '../text'
import DropDownNavBar from './components/dropdown-menu/dropdown-navbar'
import SolutionsMenu from './components/dropdown-menu/components/solutions-menu'
import AboutMenu from './components/dropdown-menu/components/about-menu'
import Link from 'next/link'
import NetworkButton from './components/network-button/network-button'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import DropDownMenuSection from './components/dropdown-menu-sect/dropdown-menu-sect'
import SolutionsMenuMob from './components/dropdown-menu/components/solutions-menu-mob'
import AboutMenuMob from './components/dropdown-menu/components/about-menu-mob'

export default function NavBar() {
    const [enabledMenu, setEnabledMenu] = useState(false)
    const pathname = usePathname()


    return (
        <>
            <div className={`fixed top-0 ${pathname !== '/' ? 'bg-white' : 'bg-white/30'}  border-b z-1000 shadow-sm border-white w-full h-fit p-5 backdrop-blur-xs`}>
                <div className='w-full h-fit items-center flex justify-between max-w-7xl mx-auto'>
                    <Link href={'/'}>
                        <Image src={'/logomarca.webp'} className='w-40 h-auto' alt='eryk olliver logomarca' width={300} height={69} />
                    </Link>
                    <div className='hidden xl:flex items-center justify-center gap-2.5 h-fit'>
                        <nav className='h-fit'>
                            <ul className='flex  gap-4'>
                                <DropDownNavBar label='soluções' content={<SolutionsMenu />} />
                                <Link className='hover:text-primary-500 select-none text-md font-poppins  transition-colors duration-150 uppercase' href={'/contact'}>portfólio</Link>
                                <DropDownNavBar label='sobre' content={<AboutMenu />} />
                                <Link className='hover:text-primary-500 select-none text-md font-poppins  transition-colors duration-150 uppercase' href={'/contact'}>Contato</Link>
                            </ul>
                        </nav>
                        <nav className='flex items-center justify-center gap-1 border-l pl-2.5'>
                            <NetworkButton icon={<Instagram className='size-6' />} label='Instagram' />
                            <NetworkButton icon={<Facebook className='size-6' />} label='Facebook' />
                            <NetworkButton icon={<FaGithub className='size-6' />} label='Github' />
                            <NetworkButton icon={<FaLinkedin className='size-6' />} label='Linkedin' />
                            <NetworkButton icon={<FaYoutube className='size-6' />} label='Youtube' />
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

                    <div className='p-3 w-60 max-w-70 h-full gap-2.5 flex flex-col items-center justify-end bg-soft-white right-0 top-0 shadow-2xl border-l-2 border-white fixed z-2000'>
                        <header className='w-full h-fit flex items-center justify-end'>
                            <X className='bg-black size-8 text-white rounded-full p-1' onClick={() => setEnabledMenu(false)} />
                        </header>
                        <nav className='overflow-x-hidden overflow-y-auto gap-3 flex flex-col h-fit w-full'>
                            <DropDownMenuSection title='Soluções'>
                                <SolutionsMenuMob />
                            </DropDownMenuSection>
                            <Link className='hover:text-primary-500 select-none text-sm font-poppins  transition-colors duration-150 uppercase' href={'/porfólio'}>Portfólio</Link>
                            <DropDownMenuSection title='Sobre'>
                                <AboutMenuMob />
                            </DropDownMenuSection>
                            <Link className='hover:text-primary-500 select-none text-sm font-poppins  transition-colors duration-150 uppercase' href={'/contact'}>Contato</Link>
                        </nav>
                    </div>
                </>
            )}
        </>
    )
}
