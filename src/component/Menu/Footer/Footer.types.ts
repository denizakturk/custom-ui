export interface FooterProps {
    style?: any
    styles?: FooterStylesProps
    children?: any
    logo?: string
    logoAlt?: string
    logoTitle?: string
    logoLink?: string
    slogan?: string
    dropShadow?: boolean
    brandName?: string
    className?: string
    classNames?: string[]
    widthLimit?: string
}

export interface FooterStylesProps {
    logoGridItem?: any
    brandGradItem?: any
    sloganGridItem?: any
    slogan?: any
}