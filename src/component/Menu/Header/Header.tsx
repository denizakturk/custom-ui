
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
import { TemplateManager } from '../../template'

export const Header: FC<HeaderProps> = ({ style, widthLimit, className, classNames, linkGroups, children, dropShadow, logo, slogan, fontFamily, brandName, styles, logoLink }: { style?: any, widthLimit?: string, className?: string, classNames?: string[], children?: any, dropShadow?: boolean, logo?: string, slogan?: string, fontFamily?: string, brandName?: string, linkGroups?: SideMenuLinkGroups, styles?: HeaderStylesProps, logoLink?: string }) => {
  let clsN = new ClassNames(["Customized-UI", "Header"])
  let styl = new Styles(TemplateManager.getHeader())
  styl.add(style)

  let stylLogoGridItem = new Styles(TemplateManager.getGridItem())
  stylLogoGridItem.add({ textAlign: "center", margin: "0" })
  stylLogoGridItem.add(styles?.logoGridItem)

  let stylTextHeader = new Styles(TemplateManager.getTextHeader())
  stylTextHeader.add(styles?.brandName)

  let stylSloganGridItem = new Styles(TemplateManager.getGridItem())
  stylSloganGridItem.add({ textAlign: "right", verticalAlign: "middle", margin: "0" })
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
              <SideMenu linkGroups={linkGroups} />
              {logo ? <Logo link={logoLink} src={logo ?? ""} /> : null}
              {brandName}
            </TextHeader>
          </GridItem>
          <GridItem col={6} hideAndDown={"sm"} style={{ margin: "0" }}>
            <TextHeader size="h5" style={stylTextHeader.getStyle()}>
              <SideMenu linkGroups={linkGroups} />
              {logo ? <Logo link={logoLink} src={logo ?? ""} /> : null}
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