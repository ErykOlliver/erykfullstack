import { ProjectCategory } from "@/src/generated/prisma/enums"
import { selectedProject } from "@/src/shared/utils/enums"

export type CategoryButtonProps = {
    text: string,
    category: ProjectCategory,
    value: ProjectCategory,
    onClick: () => void
}