import { StylesProps } from "../../../types.types"

export interface ButtonProps extends StylesProps {
    label?: string
    children?: any
    type?: "button" | "submit" | "reset" 
}