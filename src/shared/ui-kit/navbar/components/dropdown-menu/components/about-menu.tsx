import Link from 'next/link'
import React from 'react'

export default function AboutMenu() {
  return (
    <nav className='w-50 p-2'>
      <ul>
        <Link href={'/about-me'} className="flex hover:ml-2 hover:cursor-pointer text-black-600 select-none hover:bg-primary-500/20 transition-all duration-150 items-center p-3 gap-2 rounded-md">
          <span className="text-xs leading-snug max-w-35">Quem é Eryk Olliver</span>
        </Link>
        <li className="flex hover:ml-2 hover:cursor-pointer text-black-600 select-none hover:bg-primary-500/20 transition-all duration-150 items-center p-3 gap-2 rounded-md">
          <span className="text-xs leading-snug max-w-35">Minha Stack Developer</span>
        </li>
      </ul>
    </nav>
  )
}
