import Link from 'next/link'
import React from 'react'

export default function AboutMenuMob() {
  return (
    <nav className='w-full h-fit ml-2'>
      <ul className='flex flex-col h-fit w-full gap-2'>
        <Link href={'/about-me'} className="flex p-1.5 text-black-600 select-none items-center rounded-md">
          <span className="text-xs">Quem é Eryk Olliver</span>
        </Link>
        <li className="flex p-1.5 text-black-600 select-none items-center rounded-md">
          <span className="text-xs">Minha Stack Developer</span>
        </li>
      </ul>
    </nav>
  )
}
