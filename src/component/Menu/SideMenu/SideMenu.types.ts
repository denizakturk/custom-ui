export interface SideMenuProps {
    children?: any
    linkGroups?: any
    style?: any
    LinkGroups?: SideMenuLinkGroups
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