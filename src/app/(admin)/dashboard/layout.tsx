
import React from 'react'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Heading } from '@/src/shared/ui-kit/text'
import Sidebar from '@/src/modules/dashboard/components/sidebar/sidebar'
import Image from 'next/image'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/auth")
    }


    return (
        <div className="flex flex-col h-screen w-full overflow-hidden">
            <header className="h-fit bg-white border-b border-black-300 flex items-center p-6 justify-between shrink-0 z-20">
                <div className="flex items-center gap-4">
                    <Heading level={3}>Painel</Heading>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium">
                    <div className='flex flex-col items-end'>
                        <span className='font-poppins text-sm font-medium'>{session.user.admin}</span>
                        <span className='text-gray-400 text-xs font-poppins'>
                            {session.user?.role}
                        </span>
                    </div>
                    <div className="size-10 rounded-full flex relative bg-gray-200">
                        <Image fill className='object-cover rounded-full' src={'/erykolliver.jpg'} alt='avatar' />
                    </div>
                </div>
            </header>
            <div className="flex flex-1 overflow-hidden">
                <aside className="w-fit p-5 bg-white text-white border border-black-300 hidden md:flex flex-col shrink-0">
                    <Sidebar />
                </aside>
                <main className="flex-1 bg-off-white overflow-y-auto py-5 px-10">
                    <div className="max-w-700">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )


}
