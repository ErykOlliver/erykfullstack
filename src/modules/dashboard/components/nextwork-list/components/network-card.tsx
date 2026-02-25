'use client'

import { deleteNetwork } from '@/src/modules/network/services/delete-network'
import { typeGetNetworkProps } from '@/src/modules/network/type'
import { PiGlobeBold, PiPencilSimpleBold, PiTrashBold, PiArrowSquareOutBold } from 'react-icons/pi'

type props = {
    data: typeGetNetworkProps
}

export default function NetworkCard({ data }: props) {
    return (
        <div className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                    <PiGlobeBold size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-gray-800 capitalize">{data.name}</h3>
                    <a
                        href={data.link}
                        target="_blank"
                        className="text-xs text-gray-400 hover:text-orange-500 flex items-center gap-1 transition-colors"
                    >
                        {data.link} <PiArrowSquareOutBold size={12} />
                    </a>
                </div>
            </div>

            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-gray-400 transition-colors">
                    <PiPencilSimpleBold size={20} />
                </button>
                <button onClick={() => deleteNetwork(data.id)} className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg text-gray-400 transition-colors">
                    <PiTrashBold size={20} />
                </button>
            </div>
        </div>
    )
}