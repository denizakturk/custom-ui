import React, { FC } from 'react'
import { SideMenuLink, SideMenuLinkGroup, SideMenuLinkGroups, SideMenuProps } from "./SideMenu.types";
import './SideMenu.css'
import './../../hide.css'
import { Icon } from '../../Icon';
import { Link } from '../Link';
import { GridContainer, GridItem } from '../../Grid';
export const SideMenu: FC<SideMenuProps> = ({ children, linkGroups, style }: { children?: any, linkGroups?: SideMenuLinkGroups, style?: any }) => {
    let menuIsOpen = false
    let toggleMenu = () => {
        if (menuIsOpen) {
            document.getElementById('Customized-UI-Sidebar-Menu')?.classList.add('Hide')
            document.getElementById('Customized-UI-Sidebar-Menu-Overlay')?.classList.add('Hide')
            menuIsOpen = false
        } else {
            document.getElementById('Customized-UI-Sidebar-Menu')?.classList.remove('Hide')
            document.getElementById('Customized-UI-Sidebar-Menu-Overlay')?.classList.remove('Hide')
            menuIsOpen = true
        }
    }
    style = { overflowY: "scroll", ...style }
    return (
        <React.Fragment>
            <a onClick={toggleMenu} className="Customized-UI SideMenu-Open-Icon-Click hide-sm-and-up">
                <Icon name="menu_open" size={36} style={{ verticalAlign: "middle", float: "left" }} />
            </a>
            <div className="Customized-UI SideMenu Hide hide-sm-and-up" id="Customized-UI-Sidebar-Menu" style={style}>
                <Link icon="close" onClick={toggleMenu} style={{ position: "absolute", top: "15px", right: "15px" }} />
                {linkGroups ?
                    <GridContainer>
                        {linkGroups.title ?
                            <GridItem col={12}>
                                {linkGroups.title}
                            </GridItem>
                            : null}
                        {linkGroups.linkGroups?.map((val: SideMenuLinkGroup, index) => {
                            return (
                                <GridContainer key={index}>
                                    {val.title ? <GridItem col={12}>{val.title}</GridItem> : null}
                                    {val.links?.map((l: SideMenuLink, i) => {
                                        return (
                                            <GridItem col={12} key={i} style={{ textAlign: "left" }}>
                                                <Link href={l.href} icon={l.icon}>{l.name}</Link>
                                            </GridItem>
                                        )
                                    })}
                                </GridContainer>
                            )
                        })}
                    </GridContainer>
                    : null}

            </div>
            <div className="Customized-UI SideMenu-Overlay Hide hide-sm-and-up" id="Customized-UI-Sidebar-Menu-Overlay" onClick={toggleMenu}></div>
        </React.Fragment>
    )
}