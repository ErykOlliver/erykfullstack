import KpiCard from './components/kpi-card'
import { BiFolder, BiGlobe, BiStar, BiWrench } from 'react-icons/bi';

type props = {
    projectsAmount: number,
    featuredAmount: number,
    networkAmount: number,
    skillsAmount: number
}

export default function KpiPanel({ featuredAmount, projectsAmount, networkAmount, skillsAmount }: props) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <KpiCard title="Projetos" amount={projectsAmount} icon={<BiFolder />} />
            <KpiCard title="Habilidades" amount={skillsAmount} icon={<BiWrench />} />
            <KpiCard title="Redes Ativas" amount={networkAmount} icon={<BiGlobe />} />
            <KpiCard title="Em Destaque" amount={featuredAmount} icon={<BiStar />} />
        </section>
    )
}
