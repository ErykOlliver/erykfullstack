'use client'

import React, { useEffect } from 'react'
import { typeAlertProps } from '../type'
import { BiSolidError } from 'react-icons/bi'
import { GoCheckCircleFill } from "react-icons/go";
import { IoCloseCircle } from "react-icons/io5"

type props = {
    message: typeAlertProps
}

export default function Alert({ message }: props) {

    const render = () => {
        switch (message.status) {
            case 'error': return (
                <span className='flex absolute w-fit max-w-75 border-[0.5px] border-white rounded-lg items-center shadow-[0_0_1px_1px] shadow-black/40 justify-center px-3 py-2 bg-linear-to-l from-red-700 to-error gap-2 top-5 left-1/2 -translate-x-1/2'>
                    <div className='w-fit h-fit p-1 text-white'>
                        <IoCloseCircle className='size-7' />
                    </div>
                    <div className='flex text-white flex-col'>
                        <p className='text-xs font-medium font-poppins'>{message.title}</p>
                        <p className='text-xs w-fit  font-poppins text-white/90 underline'>{message.message}</p>
                    </div>
                </span>
            )
            case 'warning': return (
                <span className='flex absolute w-fit max-w-75 h-fit border-[0.5px] border-white rounded-lg items-center shadow-[0_0_1px_1px] shadow-black/40 justify-center px-3 py-2 bg-linear-to-l from-yellow-700 to-warning gap-2 top-5 left-1/2 -translate-x-1/2'>
                    <div className='w-fit h-fit p-1 text-white'>
                        <BiSolidError className='size-7' />
                    </div>
                    <div className='flex text-white flex-col'>
                        <p className='text-xs font-medium font-poppins'>{message.title}</p>
                        <p className='text-xs w-fit  font-poppins text-white/90 underline'>{message.message}</p>
                    </div>
                </span>
            )
            case 'success': return (
                <span className='flex absolute w-fit max-w-75 h-fit border-[0.5px] border-white rounded-lg items-center shadow-[0_0_1px_1px] shadow-black/40 justify-center px-3 py-2 bg-linear-to-l from-green-700 to-success gap-2 top-5 left-1/2 -translate-x-1/2'>
                    <div className='w-fit h-fit p-1 text-white'>
                        <GoCheckCircleFill className='size-7' />
                    </div>
                    <div className='flex text-white flex-col'>
                        <p className='text-xs font-medium font-poppins'>{message.title}</p>
                        <p className='text-xs w-fit  font-poppins text-white/90 underline'>{message.message}</p>
                    </div>
                </span>
            )
        }
    }
    return render()
}
