import { APP_NAME } from "@/core/models/app.const"

export const generateName = (name: string) => {
    return `${APP_NAME}-${name}`
}