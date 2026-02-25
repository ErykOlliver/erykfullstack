import { typeGetProjectProps } from "@/src/modules/projects/type"

export type ApiResponse = {
    status: string,
    data: typeGetProjectProps[]
}