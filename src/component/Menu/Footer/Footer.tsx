import React, { FC } from 'react'
import { Logo, Slogan } from '../../Menu/Header'
import { GridContainer, GridItem } from '../../Container/Grid'
import { FooterProps, FooterStylesProps } from './Footer.types'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'

export const Footer: FC<FooterProps> = ({ children, style, styles, logo, brandName, slogan, dropShadow, className, classNames, widthLimit, logoAlt, logoTitle, logoLink }: { children?: any, style?: any, styles?: FooterStylesProps, logo?: string, brandName?: string, slogan?: string, dropShadow?: boolean, className?: string, classNames?: string[], widthLimit?: string, logoAlt?: string, logoTitle?: string, logoLink?: string }) => {
    let clsN = new ClassNames(["Customized-UI", "Footer"])
    let styl = new Styles(style)
    let stylLogoGridItem = new Styles({ textAlign: "center", marginTop: "0", marginLeft: "0", marginRight: "5px" })
    stylLogoGridItem.add(styles?.logoGridItem)
    let stylBrandGridItem = new Styles({ textAlign: "center", margin: "0", fontWeight: "bold" })
    stylBrandGridItem.add(styles?.brandGradItem)
    let stylSloganGridItem = new Styles({ textAlign: "center", margin: "0" })
    stylSloganGridItem.add(styles?.sloganGridItem)
    let stylSlogan = new Styles({ flexDirection: "column", textAlign: "center" })
    stylSlogan.add(styles?.slogan)
    clsN.add(className).addMany(classNames)
    if (dropShadow) {
        clsN.add("BoxShadow")
    }
    return (
        <footer className={clsN.getName()} style={styl.getStyle()}>
            {children ??
                <GridContainer widthLimit={widthLimit}>
                    {logo ? <GridItem col={12} style={stylLogoGridItem.getStyle()}>
                        <Logo src={logo ?? ""} alt={logoAlt} title={logoTitle} link={logoLink} /> <span style={stylBrandGridItem.getStyle()}>{brandName}</span>
                    </GridItem> : null}
                    {slogan ? <GridItem col={12} style={stylSloganGridItem.getStyle()}>
                        <Slogan align={"center"} style={stylSlogan.getStyle()}>{slogan}</Slogan>
                    </GridItem> : null}
                </GridContainer>
            }
        </footer >
    )
}