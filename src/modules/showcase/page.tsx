import React from 'react'
import Home from './components/home/page'
import Projects from './components/projects/page'
import DigitalSolutions from './components/digital-solutions/page'
import Faq from './components/faq/page'
import Contact from './components/contact/page'
import { getProjects } from '@/src/shared/api/projects/projects'
import Footer from './components/footer/page'


export default async function ShowCase() {
    return (
        <>
            <Home />
            <Projects data={await getProjects()} />
            <DigitalSolutions />
            <Faq />
            <Contact />
            <Footer />
        </>
    )
}
