import { StylesProps } from "../../../types.types";
import { SideMenuLinkGroups } from "../SideMenu/SideMenu.types";

export interface HeaderProps extends StylesProps {
    children?: any
    dropShadow?: boolean
    logo?: string
    slogan?: string
    fontFamily?: string
    brandName?: string
    linkGroups?: SideMenuLinkGroups
    styles?: HeaderStylesProps
    widthLimit?: string
    logoLink?: string
}

export interface HeaderStylesProps {
    logoGridItem?: any
    brandName?: any
    sloganGridItem?: any
}