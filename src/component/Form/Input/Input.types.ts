import { ChangeEvent, HTMLInputTypeAttribute } from "react"
import { StylesProps } from "../../../types.types"

export interface InputProps extends StylesProps {
    defaultValue?: any
    name?: string
    type?: HTMLInputTypeAttribute | undefined
    value?: any
    onChange?: (changeEvent: ChangeEvent) => any
    placeholder?: string
}