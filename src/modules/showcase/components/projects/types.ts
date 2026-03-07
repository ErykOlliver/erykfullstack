import { ProjectCategory } from "@/src/generated/prisma/enums"
import { selectedProject } from "@/src/shared/libs/enums"

export type CategoryButtonProps = {
    text: string,
    category: ProjectCategory,
    value: ProjectCategory,
    onClick: () => void
}