import React, { FC } from 'react'
import { SideMenuProps } from "./SideMenu.types";
import './SideMenu.css'
import './../../hide.css'
import { Icon } from '../../Icon';
export const SideMenu: FC<SideMenuProps> = ({ children, linkGroups, style }: { children?: any, linkGroups?: any, style?: any }) => {
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
    return (
        <React.Fragment>
            <a onClick={toggleMenu} className="Customized-UI SideMenu-Open-Icon-Click hide-sm-and-up">
                <Icon name="menu_open" size={36} style={{ verticalAlign: "middle", float: "left" }} />
            </a>
            <div className="Customized-UI SideMenu Hide hide-sm-and-up" id="Customized-UI-Sidebar-Menu" style={style}>
                {children}
            </div>
            <div className="Customized-UI SideMenu-Overlay Hide hide-sm-and-up" id="Customized-UI-Sidebar-Menu-Overlay" onClick={toggleMenu}>{children}</div>
        </React.Fragment>
    )
}