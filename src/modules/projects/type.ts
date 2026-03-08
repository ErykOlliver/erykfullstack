import { ProjectCategory, Status } from "@/src/generated/prisma/enums"

export type typeProjectProps = {
    poster: string,
    title: string,
    description: string,
    slug: string,
    github?: string,
    page?: string,
    designer: string,
    designerPage: string,
    applicationType: string,
    isFeatured?: boolean,
    status: Status
    category: ProjectCategory
    skills: number[]
}

export type typeCreateProjectProps = {
    poster: File | null,
    title: string,
    description: string,
    slug: string,
    github?: string,
    page?: string,
    designer: string,
    designerPage: string,
    applicationType: string,
    isFeatured?: boolean,
    status: Status
    category: ProjectCategory
    skills: number[]
}

export type typeGetProjectProps = {
    id: string,
    poster: string,
    title: string,
    description: string,
    slug: string,
    github?: string,
    page?: string,
    designer: string,
    designerPage: string,
    applicationType: string,
    isFeatured?: boolean,
    status: Status
    category: ProjectCategory
    skills: number[]
}

export type typeGetProjectPaginationProps = {
    status: string,
    data: typeGetProjectProps[]
    pagination: {
        total: number,
        page: number,
        limit: number,
        totalPages: number
    }
}
