import { StylesProps } from "../../../types.types"

export interface ParagraphProps extends StylesProps {
    children?: any
    text?: string
    nl2br?: boolean
}