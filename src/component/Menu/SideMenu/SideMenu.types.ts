export interface SideMenuProps {
    children?: any
    linkGroups?: any
    style?: any
    LinkGroups?: SideMenuLinkGroups
    classNameSideMenu?: string
    classNamesSideMenu?: string[]
    classNameBtn?: string
    classNamesBtn?: string[]
    classNameOverlay?: string
    classNamesOverlay?: string[]
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