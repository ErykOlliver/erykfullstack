import React from 'react'
import Home from './components/home/page'
import Projects from './components/projects/page'
import DigitalSolutions from './components/digital-solutions/page'
import Faq from './components/faq/page'
import Contact from './components/contact/page'
import { ApiResponse, typeGetProjectProps } from '../projects'
import { NextResponse } from 'next/server'


export default async function ShowCasePage() {

    const projects = await fetch(`${process.env.NEXT_URL}/api/projects`, {
        cache: 'no-store'
    })

    const json: ApiResponse = await projects.json()

    const data = json.data

    return (
        <>
            <Home />
            <Projects data={data} />
            <DigitalSolutions />
            <Faq />
            <Contact />
        </>
    )
}
