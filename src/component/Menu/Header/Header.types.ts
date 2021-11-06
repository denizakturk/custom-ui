import { SideMenuLinkGroups } from "../SideMenu/SideMenu.types";

export interface HeaderProps {
    children?: any
    dropShadow?: boolean
    logo?: string
    slogan?: string
    fontFamily?: string
    brandName?: string
    linkGroups?: SideMenuLinkGroups
    className?: string
    classNames?: string[]
    styles?: HeaderStylesProps
    style?: any
    widthLimit?: string
}

export interface HeaderStylesProps {
    logoGridItem?: any
    brandName?: any
    sloganGridItem?: any
}