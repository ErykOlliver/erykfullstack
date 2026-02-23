'use client'

import { Heading } from '@/src/shared/ui-kit/text'
import { Input } from '@mui/material'
import { Key, ShieldUser } from 'lucide-react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import AuthForm from './components/main-form'

export default function Auth() {

    return (
        <section className=' flex xl:flex-row flex-col relative items-center justify-center w-screen h-screen'>
            <article className=' h-1/2 w-full xl:w-1/2 bg-soft-white xl:h-full flex flex-col items-center justify-center aspect-square '>
                <Image src={'/Secure login-bro.svg'} loading='eager' className='pointer-events-none size-70 xl:size-140 select-none' width={30} height={30} alt='Triangle Logo' />
            </article>
            <article className="flex bg-off-white/95 pt-6 xl:pt-0 justify-center shadow-[-5px_0_10px_1px] shadow-black/10 border-l-2  border-white px-10 xl:px-20 h-1/2 w-full xl:w-1/2 xl:h-full xl:items-center  max-w-7xl gap-8 flex-col">
                <div className="flex flex-col items-center gap-5">
                    <Heading level={1} className="text-primary font-semibold select-none xl:text-4xl">Login para o painel</Heading>
                </div>
                <AuthForm />
            </article>
        </section>
    )
}
