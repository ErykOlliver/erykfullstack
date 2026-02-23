import { typeGetProjectProps } from "@/src/modules/projects"

export type ApiResponse = {
    status: string,
    data: typeGetProjectProps[]
}