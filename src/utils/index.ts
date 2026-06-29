import { APP_NAME } from "@/models/app.const"

export const generateName = (name:string) => {
    return `${APP_NAME}-${name}`
}