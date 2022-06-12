import { ChangeEvent, HTMLInputTypeAttribute } from "react"
import { IDProps, StylesProps } from "../../../types.types"

export interface InputProps extends StylesProps, IDProps {
    defaultValue?: any
    name?: string
    type?: HTMLInputTypeAttribute | undefined
    value?: any
    onChange?: (changeEvent: ChangeEvent) => any
    placeholder?: string
}