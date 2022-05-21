import { StylesProps } from "../../../types.types"

export interface FooterProps extends StylesProps {
    styles?: FooterStylesProps
    children?: any
    logo?: string
    logoAlt?: string
    logoTitle?: string
    logoLink?: string
    slogan?: string
    dropShadow?: boolean
    brandName?: string
    widthLimit?: string
}

export interface FooterStylesProps {
    logoGridItem?: any
    brandGradItem?: any
    sloganGridItem?: any
    slogan?: any
}