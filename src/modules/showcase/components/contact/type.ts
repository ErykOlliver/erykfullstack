export type typeAlertProps = {
    title: string,
    message: string,
    status: "error" | "warning" | "success"
}

export type typeResultProps = {
    status: "error" | "warning" | "success",
    message: string
}