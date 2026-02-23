import React from 'react'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { Heading } from '@/src/shared/ui-kit/text'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/auth")
    }

    return (
        <>
            <div className='fixed top-0 bg-white border-b z-1000 shadow-sm border-white w-full h-fit p-5 xl:px-10'>
                <div className='w-full h-fit items-center flex justify-between'>
                    <Heading level={1}>Painel</Heading>
                </div>
            </div>
            <main className='pt-25 w-screen h-screen bg-off-white flex flex-col px-5 gap-5 xl:px-10  items-center justify-start'>
                {children}
            </main>
        </>
    )


}
