
import React, { FC } from 'react'
import { HeaderProps } from "./Header.types"
import './Header.css'
import { GridContainer, GridItem } from '../../Grid'
import { TextHeader } from '../../Article'
import { Logo } from './Logo'
import { Slogan } from './Slogan'
import { SideMenu } from './../SideMenu'

export const Header: FC<HeaderProps> = ({ children, dropShadow, logo, slogan, fontFamily, brandName }: { children?: any, dropShadow?: boolean, logo?: string, slogan?: string, fontFamily?: string, brandName?: string }) => {
  let cls = "Customized-UI Header"
  if (dropShadow) {
    cls += " BoxShadow"
  }
  let textHeaderStyl = {}
  if (fontFamily) {
    textHeaderStyl = { fontFamily: fontFamily, ...textHeaderStyl }
  }
  return (
    <header className={cls}>
      {children ? children :
        <GridContainer style={{ padding: "0" }}>
          <GridItem col={6} hideAndUp={"sm"} style={{ textAlign: "center" }}>
            <TextHeader size="h5" style={textHeaderStyl}>
              <SideMenu style={{ backgroundColor: "#ff0000" }}>SideMenuBar</SideMenu>
              {logo ? <Logo src={logo ?? ""} /> : null}
              {brandName}
            </TextHeader>
          </GridItem>
          <GridItem col={6} hideAndDown={"sm"}>
            <TextHeader size="h5" style={textHeaderStyl}>
              <SideMenu style={{ backgroundColor: "#ff0000" }}>SideMenuBar</SideMenu>
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