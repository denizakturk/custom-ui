import { StylesProps } from "../../../types.types"

export interface LinkProps extends StylesProps {
    children?: any
    icon?: string
    onClick?: any
    styles?: LinkStylesProps
    href?: string
    iconSize?: 18 | 24 | 36 | 48
}

export interface LinkStylesProps {
    link?: any
    icon?: any
}