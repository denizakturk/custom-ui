import { ChangeEvent, HTMLInputTypeAttribute } from "react"

export interface InputProps {
    defaultValue?: any
    name?: string
    type?: HTMLInputTypeAttribute | undefined
    style?: any
    styles?: any
    className?: string
    classNames?: string[]
    value?: any
    onChange?: (changeEvent: ChangeEvent) => any
}