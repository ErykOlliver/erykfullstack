import { SkillCategory } from "@/src/generated/prisma/enums"

export type typeSkillsProps = {
    name: string,
    category: SkillCategory
}

export type typeGetSkillsProps = {
    id: number,
    name: string,
    category: SkillCategory
}