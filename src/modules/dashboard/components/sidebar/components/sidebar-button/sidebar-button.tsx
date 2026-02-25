'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type props = {
    icon: React.ReactNode,
    name: string,
    href: string
}

export default function SideBarButton({ href, name, icon }: props) {
    const pathname = usePathname()

    return (
        <Link href={href} className={`group h-fit w-fit flex rounded-lg items-center justify-center p-2 relative ${pathname === href ? 'bg-orange-500 text-white' : 'text-black-600 hover:bg-black/10'}`}>
            <div className='w-fit h-fit p-2'>
                {icon}
            </div>
            <span className={`absolute font-medium rounded-md hidden ${pathname === href ? 'bg-orange-500 text-white' : 'text-black bg-black/20'} group-hover:block w-fit h-fit top-1/2 p-2 -translate-y-1/2 left-15`}>
                {name}
            </span>
        </Link>
    )
}
