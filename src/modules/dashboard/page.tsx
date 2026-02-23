import React from 'react'
import KpiPanel from './components/kpi-panel/page'
import { getProjects } from '@/src/shared/api/projects/projects'
import ProjectList from './components/projects-list/page'

export default async function Dashboard() {
    return (
        <>
            <KpiPanel projectsAmount={(await getProjects()).length} featuredAmount={(await getProjects()).filter(p => p.isFeatured).length} />
            <ProjectList />
        </>
    )
}
