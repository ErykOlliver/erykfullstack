import { Menu } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function NavBar() {
    return (
        <div className='fixed top-0 bg-white/30 border-2 z-1000 shadow-sm border-white w-full h-fit p-5 backdrop-blur-xs'>
            <div className='w-full h-fit items-center flex justify-between'>
                <Image src={'/logomarca.webp'} className='w-40 h-auto' alt='eryk olliver logomarca' width={300} height={69} />
                <Menu className='size-8' />
            </div>
        </div>
    )
}
