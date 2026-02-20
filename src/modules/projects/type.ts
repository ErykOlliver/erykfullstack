import { ProjectCategory, Status } from "@/src/generated/prisma/enums"
import { typeSkillsProps } from "../skills"

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
    skills: string[]
}