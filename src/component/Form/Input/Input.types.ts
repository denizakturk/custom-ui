import { HTMLInputTypeAttribute } from "react"

export interface InputProps {
    defaultValue?: string
    name?: string
    type?: HTMLInputTypeAttribute | undefined
    style?: any
    styles?: any
    className?: string
    classNames?: string[]
    value?: any
}