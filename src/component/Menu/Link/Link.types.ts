export interface LinkProps {
    children?: any
    icon?: string
    onClick?: any
    style?: any
    styles?: LinkStylesProps
    href?: string
    className?: string
    classNames?: string[],
    iconSize?: 18 | 24 | 36 | 48
}

export interface LinkStylesProps {
    link?: any
    icon?: any
}