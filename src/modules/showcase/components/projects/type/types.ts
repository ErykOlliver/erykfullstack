import { selectedProject } from "@/src/shared/utils/enums"

export type CategoryButtonProps = {
    text: string,
    category: selectedProject,
    value: selectedProject,
    onClick: () => void
}