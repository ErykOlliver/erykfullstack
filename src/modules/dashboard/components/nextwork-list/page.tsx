import React from 'react'
import { Heading } from '@/src/shared/ui-kit/text'
import { PiShareNetworkBold } from 'react-icons/pi'
import NetworkCard from './components/network-card'
import { typeGetNetworkProps } from '@/src/modules/network/type'

type Props = {
    data: typeGetNetworkProps[]
}

export default function NetworkList({ data }: Props) {
    return (
        <section className='w-full flex flex-col bg-white border rounded-2xl border-gray-200 shadow-sm overflow-hidden'>
            <header className='flex w-full py-4 px-5 items-center justify-between border-b border-gray-100'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-zinc-800 rounded-full' />
                    <Heading level={2} className='text-lg font-bold text-gray-800'>Redes Sociais</Heading>
                </div>
                <div className="text-gray-400"><PiShareNetworkBold size={24} /></div>
            </header>

            <div className='flex flex-col bg-gray-50/30 p-4 h-95 overflow-y-auto gap-4 w-full'>
                {data.length > 0 ? (
                    data.map((item) => <NetworkCard key={item.id} data={item} />)
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
                        <p className='font-medium'>Nenhuma rede ativa...</p>
                    </div>
                )}
            </div>
        </section>
    )
}