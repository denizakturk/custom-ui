import { StylesProps } from "../../../types.types"

export interface TextHeaderProps extends StylesProps {
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    text?: string
    children?: any
}