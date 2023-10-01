import React, { FC } from 'react'
import { SideMenuLink, SideMenuLinkGroup, SideMenuProps } from "./SideMenu.types";
//import './SideMenu.css'
//import './../../hide.css'
import { Icon } from '../../Icon';
import { Link } from '../Link';
import { GridContainer, GridItem } from '../../Container/Grid';
import { ClassNames } from '../../ClassNames';
import { Styles } from '../../Styles';
import { TemplateManager } from '../../template';
export const SideMenu: FC<SideMenuProps> = ({ children, linkGroups, style, styles, classNameBtn, classNamesBtn, classNameSideMenu, classNamesSideMenu, classNameOverlay, classNamesOverlay, openMenuIconName }: SideMenuProps) => {
    let styl = new Styles(TemplateManager.getSideMenu())
    styl.add({ overflowY: "scroll" })
    styl.add(style)

    let stylOpenMenuIcon = new Styles(TemplateManager.getIcon())
    stylOpenMenuIcon.add({ verticalAlign: "middle", float: "left" })
    stylOpenMenuIcon.add(styles?.openMenuIcon)

    let stylCloseMenuLink = new Styles(TemplateManager.getLink())
    stylCloseMenuLink.add({ position: "absolute", top: "15px", right: "15px" })
    stylCloseMenuLink.add(styles?.closeButton?.link)
    let stylCloseMenuIcon = new Styles(TemplateManager.getIcon())
    stylCloseMenuIcon.add(styles?.closeButton?.icon)

    let stylLinkGrid = new Styles({ textAlign: "left" })
    stylLinkGrid.add(styles?.linkGrid)


    let clsNBtn = new ClassNames(["Customized-UI", "SideMenu-Open-Icon-Click", "hide-sm-and-up"])
    let clsNSideMenu = new ClassNames(["Customized-UI", "SideMenu", "Hide", "hide-sm-and-up"])
    let clsNOverlay = new ClassNames(["Customized-UI", "SideMenu-Overlay", "Hide", "hide-sm-and-up"])
    clsNBtn.add(classNameBtn).addMany(classNamesBtn)
    clsNSideMenu.add(classNameSideMenu).addMany(classNamesSideMenu)
    clsNOverlay.add(classNameOverlay).addMany(classNamesOverlay)
    let menuIsOpen = false
    let toggleMenu = () => {
        if (menuIsOpen) {
            if (typeof document != "undefined") {
                document.getElementById('Customized-UI-Sidebar-Menu')?.classList.add('Hide')
                document.getElementById('Customized-UI-Sidebar-Menu-Overlay')?.classList.add('Hide')
                menuIsOpen = false
            }
        } else {
            if (typeof document != "undefined") {
                document.getElementById('Customized-UI-Sidebar-Menu')?.classList.remove('Hide')
                document.getElementById('Customized-UI-Sidebar-Menu-Overlay')?.classList.remove('Hide')
                menuIsOpen = true
            }
        }
    }
    return (
        <React.Fragment>
            <a onClick={toggleMenu} className={clsNBtn.getName()}>
                <Icon name={openMenuIconName ?? "menu_open"} size={36} style={stylOpenMenuIcon.getStyle()} />
            </a>
            <div className={clsNSideMenu.getName()} id="Customized-UI-Sidebar-Menu" style={styl.getStyle()}>
                <React.Fragment>
                    <Link icon="close" onClick={toggleMenu} styles={{ link: stylCloseMenuLink.getStyle(), icon: stylCloseMenuIcon.getStyle() }} />
                    {children ? children : linkGroups ?
                        <GridContainer>
                            {linkGroups.title ?
                                <GridItem col={12}>
                                    {linkGroups.title}
                                </GridItem>
                                : null}
                            {linkGroups.linkGroups?.map((val: SideMenuLinkGroup, index: any) => {
                                return (
                                    <GridContainer key={index}>
                                        {val.title ? <GridItem col={12}>{val.title}</GridItem> : null}
                                        {val.links?.map((l: SideMenuLink, i) => {
                                            return (
                                                <GridItem col={12} key={i} style={stylLinkGrid.getStyle()}>
                                                    <Link href={l.href} icon={l.icon}>{l.name}</Link>
                                                </GridItem>
                                            )
                                        })}
                                    </GridContainer>
                                )
                            })}
                        </GridContainer>
                        : null}
                </React.Fragment>


            </div>
            <div className={clsNOverlay.getName()} id="Customized-UI-Sidebar-Menu-Overlay" onClick={toggleMenu}></div>
        </React.Fragment>
    )
}