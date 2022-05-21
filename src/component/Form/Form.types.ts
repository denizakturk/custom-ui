import { StylesProps } from "../../types.types"

export interface FormProps extends StylesProps {
    action?: string
    method?: string
    children?: any
}