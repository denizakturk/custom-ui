
import React, { FC } from 'react'
import { HeaderProps, HeaderStylesProps } from "./Header.types"
import './Header.css'
import { GridContainer, GridItem } from '../../Container/Grid'
import { TextHeader } from '../../Article'
import { Logo } from './Logo'
import { Slogan } from './Slogan'
import { SideMenu } from './../SideMenu'
import { SideMenuLinkGroups } from '../SideMenu/SideMenu.types'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'

export const Header: FC<HeaderProps> = ({ style, widthLimit, className, classNames, linkGroups, children, dropShadow, logo, slogan, fontFamily, brandName, styles }: { style?: any, widthLimit?: string, className?: string, classNames?: string[], children?: any, dropShadow?: boolean, logo?: string, slogan?: string, fontFamily?: string, brandName?: string, linkGroups?: SideMenuLinkGroups, styles?: HeaderStylesProps }) => {
  let clsN = new ClassNames(["Customized-UI", "Header"])
  let styl = new Styles(style)
  let stylLogoGridItem = new Styles({ textAlign: "center", margin: "0" })
  let stylTextHeader = new Styles(styles?.brandName)
  let stylSloganGridItem = new Styles({ textAlign: "right", verticalAlign: "middle", margin: "0" })
  stylTextHeader.add(styles?.brandName)
  stylLogoGridItem.add(styles?.logoGridItem)
  stylSloganGridItem.add(styles?.sloganGridItem)
  clsN.add(className).addMany(classNames)
  if (dropShadow) {
    clsN.add("BoxShadow")
  }
  if (fontFamily) {
    stylTextHeader.add({ fontFamily: fontFamily })
  }
  return (
    <header className={clsN.getName()} style={styl.getStyle()}>
      {children ? children :
        <GridContainer style={{ padding: "0" }} widthLimit={widthLimit}>
          <GridItem col={12} hideAndUp={"sm"} style={stylLogoGridItem.getStyle()}>
            <TextHeader size="h5" style={stylTextHeader.getStyle()}>
              <SideMenu linkGroups={linkGroups}/>
              {logo ? <Logo src={logo ?? ""} /> : null}
              {brandName}
            </TextHeader>
          </GridItem>
          <GridItem col={6} hideAndDown={"sm"} style={{ margin: "0" }}>
            <TextHeader size="h5" style={stylTextHeader.getStyle()}>
              <SideMenu linkGroups={linkGroups}/>
              {logo ? <Logo src={logo ?? ""} /> : null}
              {brandName}
            </TextHeader>
          </GridItem>
          <GridItem col={6} hideAndDown={"sm"} style={stylSloganGridItem.getStyle()}>
            {slogan ? <Slogan>{slogan}</Slogan> : null}
          </GridItem>
        </GridContainer>
      }
    </header>
  )
}