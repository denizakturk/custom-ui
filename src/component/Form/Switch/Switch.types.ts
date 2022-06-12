import { IDProps, StylesProps } from "../../../types.types";

export interface SwitchProps extends StylesProps, IDProps {
    defaultStatus?: boolean
    name?: string
    value?: string
    radio?: boolean
}