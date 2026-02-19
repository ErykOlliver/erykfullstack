import React from 'react'
import Home from './components/home/page'
import Projects from './components/projects/page'
import DigitalSolutions from './components/digital-solutions/page'
import Faq from './components/faq/page'

export default function ShowCasePage() {
    return (
        <>
            <Home />
            <Projects />
            <DigitalSolutions />
            <Faq />
        </>
    )
}
