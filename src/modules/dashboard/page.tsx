import React from 'react'
import KpiPanel from './components/kpi-panel/page'
import ProjectList from './components/projects-list/page'
import SkillList from './components/skills-list/page'
import { getProjects } from '@/src/shared/api/projects/projects'
import { getSkills } from '@/src/shared/api/skills/skills'
import { PiPlusBold, PiFolderPlusBold, PiCodeBlockBold } from 'react-icons/pi'
import CreateProjectModal from './components/create-project-modal/create-project-modal'
import CreateSkillModal from './components/create-skill-modal/create-skill-modal'
import CreateNetworkModal from './components/create-network-modal/create-network-modal'
import NetworkList from './components/nextwork-list/page'
import { listNetwork } from '../network/services/list-network'

export default async function Dashboard() {
    const [projects, skills, networks] = await Promise.all([
        getProjects(),
        getSkills(),
        listNetwork()
    ]);

    const featuredCount = projects.filter(p => p.isFeatured).length;

    return (
        <div className="flex flex-col gap-8 w-full max-w-400 mx-auto pb-10">

            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Visão Geral</h1>
                    <p className="text-sm text-gray-500">Gerencie seus projetos e competências</p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <CreateProjectModal availableSkills={skills} />
                    <CreateSkillModal />
                    <CreateNetworkModal />
                </div>
            </header>

            <KpiPanel
                projectsAmount={projects.length}
                featuredAmount={featuredCount}
                networkAmount={networks.length}
                skillsAmount={skills.length}
            />

            <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
                <ProjectList data={projects} />
                <SkillList data={skills} />
                <NetworkList data={networks} />
            </section>
        </div>
    )
}