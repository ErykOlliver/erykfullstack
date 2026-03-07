import React, { useRef, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

type props = {
    label: string
    content?: React.ReactNode
}

export default function DropDownNavBar({ label, content }: props) {
    const [isOpen, setIsOpen] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsOpen(true)
    }

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false)
        }, 150)
    }

    return (
        <div
            className="relative rounded-md"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <li className="hover:text-primary-500 cursor-pointer select-none font-poppins flex items-center gap-1 transition-colors duration-150 uppercase">
                {label}

                <TiArrowSortedDown
                    size={24}
                    className={`transition-transform duration-150 ${isOpen ? "rotate-180 text-primary-500" : ""
                        }`}
                />
            </li>

            {isOpen && (
                <div className="bg-white z-50 top-15 absolute left-1/2 -translate-x-1/2 border border-zinc-200 border-b-3 border-b-primary-500/50 shadow-md rounded-md">
                    {content}
                </div>
            )}
        </div>
    )
}