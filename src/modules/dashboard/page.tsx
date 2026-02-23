import React from 'react'
import KpiPanel from './components/kpi-panel/page'
import { getProjects } from '@/src/shared/api/projects/projects'
import ProjectList from './components/projects-list/page'

export default async function Dashboard() {
    return (
        <>
            <KpiPanel projectsAmount={(await getProjects()).length} featuredAmount={(await getProjects()).filter(p => p.isFeatured).length} />
            <section className='flex flex-col w-full h-fit xl:flex-row gap-2'>
                <ProjectList data={await getProjects()} />
                <ProjectList data={await getProjects()} />
                <ProjectList data={await getProjects()} />
            </section>
        </>
    )
}
