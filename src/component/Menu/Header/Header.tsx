
import React, { FC } from 'react'
import { HeaderProps } from "./Header.types"
import './Header.css'
import { GridContainer, GridItem } from '../../Container/Grid'
import { TextHeader } from '../../Article'
import { Logo } from './Logo'
import { Slogan } from './Slogan'
import { SideMenu } from './../SideMenu'
import { SideMenuLinkGroups } from '../SideMenu/SideMenu.types'
import { ClassNames } from '../../ClassNames'

export const Header: FC<HeaderProps> = ({ className, classNames, linkGroups, children, dropShadow, logo, slogan, fontFamily, brandName }: { className?: string, classNames?: string[], children?: any, dropShadow?: boolean, logo?: string, slogan?: string, fontFamily?: string, brandName?: string, linkGroups?: SideMenuLinkGroups }) => {
  let clsN = new ClassNames(["Customized-UI", "Header"])
  clsN.add(className).addMany(classNames)
  if (dropShadow) {
    clsN.add("BoxShadow")
  }
  let textHeaderStyl = {}
  if (fontFamily) {
    textHeaderStyl = { fontFamily: fontFamily, ...textHeaderStyl }
  }
  return (
    <header className={clsN.getName()}>
      {children ? children :
        <GridContainer style={{ padding: "0" }}>
          <GridItem col={6} hideAndUp={"sm"} style={{ textAlign: "center" }}>
            <TextHeader size="h5" style={textHeaderStyl}>
              <SideMenu linkGroups={linkGroups}>SideMenuBar</SideMenu>
              {logo ? <Logo src={logo ?? ""} /> : null}
              {brandName}
            </TextHeader>
          </GridItem>
          <GridItem col={6} hideAndDown={"sm"}>
            <TextHeader size="h5" style={textHeaderStyl}>
              <SideMenu linkGroups={linkGroups}>SideMenuBar</SideMenu>
              {logo ? <Logo src={logo ?? ""} /> : null}
              {brandName}
            </TextHeader>
          </GridItem>
          <GridItem col={6} hideAndDown={"sm"} style={{ textAlign: "right", verticalAlign: "middle" }}>
            {slogan ? <Slogan>{slogan}</Slogan> : null}
          </GridItem>
        </GridContainer>
      }
    </header>
  )
}