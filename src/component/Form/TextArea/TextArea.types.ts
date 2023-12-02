import { ChangeEvent, HTMLInputTypeAttribute, RefObject } from "react"
import { StylesProps } from "../../../types.types"

export interface TextAreaProps extends StylesProps {
    value?: any
    rows?: number
    id?: string
    readOnly?: boolean
    name?: string
    resize?: boolean
    onChange?: (changeEvent: ChangeEvent) => any
    ref?: RefObject<HTMLTextAreaElement>
}