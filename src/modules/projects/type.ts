import { ProjectCategory } from "@/src/generated/prisma/enums"
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
    category: ProjectCategory
    skills: string[]
}