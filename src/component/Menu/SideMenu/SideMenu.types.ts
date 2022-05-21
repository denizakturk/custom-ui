import { StylesProps } from "../../../types.types"

export interface SideMenuProps extends StylesProps {
    children?: any
    linkGroups?: any
    styles?: SideMenuStylesProps
    LinkGroups?: SideMenuLinkGroups
    classNameSideMenu?: string
    classNamesSideMenu?: string[]
    classNameBtn?: string
    classNamesBtn?: string[]
    classNameOverlay?: string
    classNamesOverlay?: string[]
    openMenuIconName?: string
}

export interface SideMenuStylesProps {
    closeButton?: SideMenuCloseButtonStyles
    openMenuIcon?: any
    linkGrid?: any
}

export interface SideMenuCloseButtonStyles {
    link?: any
    icon?: any
}

export interface SideMenuLinkGroups {
    title?: string
    linkGroups?: SideMenuLinkGroup[]
}

export interface SideMenuLinkGroup {
    title?: string
    links?: SideMenuLink[]
}

export interface SideMenuLink {
    name?: string
    href?: string
    icon?: string
}