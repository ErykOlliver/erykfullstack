export type typeFindAdminProps = {
    admin: string,
    key: string
}

export type typeAdminProps = {
    id: number,
    admin: string,
    key: string
}

export type typeAlertProps = {
    title: string,
    message: string,
    status: "error" | "warning" | "success"
}