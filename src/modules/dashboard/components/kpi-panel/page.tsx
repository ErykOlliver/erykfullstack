import React from 'react'
import KpiCard from './components/kpi-card'
import { User } from 'lucide-react'
import { FaScrewdriverWrench } from "react-icons/fa6";
import { MdFolderCopy } from "react-icons/md";
import { GiGlobe } from "react-icons/gi";
import { PiCrownSimpleFill } from 'react-icons/pi';

type props = {
    projectsAmount: number,
    featuredAmount: number,
}

export default function KpiPanel({ featuredAmount, projectsAmount }: props) {
    return (
        <article className=' w-full h-fit flex items-center  flex-col'>
            <article className=' w-full grid grid-cols-2 gap-1 xl:flex '>
                <KpiCard icon={<MdFolderCopy className='size-4 md:size-6 ' />} title='Projetos' amount={projectsAmount} />
                <KpiCard icon={<FaScrewdriverWrench className='size-4 md:size-6 ' />} title='Habilidades' amount={100} />
                <KpiCard icon={<GiGlobe className='size-4 md:size-6 ' />} title='Redes Ativas' amount={100} />
                <KpiCard icon={<PiCrownSimpleFill className='size-4 md:size-6 ' />} title='Em Destaque' amount={featuredAmount} />
            </article>
        </article>
    )
}
