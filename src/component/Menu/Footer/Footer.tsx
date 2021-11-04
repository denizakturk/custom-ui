import React, { FC } from 'react'
import { Logo, Slogan } from '../../Menu/Header'
import { GridContainer, GridItem } from '../../Container/Grid'
import { FooterProps } from './Footer.types'
import { ClassNames } from '../../ClassNames'

export const Footer: FC<FooterProps> = ({ children, style, logo, brandName, slogan, dropShadow, className, classNames }: { children?: any, style?: any, logo?: string, brandName?: string, slogan?: string, dropShadow?: boolean, className?: string, classNames?: string[] }) => {
    let clsN = new ClassNames(["Customized-UI", "Footer"])
    clsN.add(className).addMany(classNames)
    if (dropShadow) {
        clsN.add("BoxShadow")
    }
    return (
        <footer className={clsN.getName()}>
            {children ??
                <GridContainer>
                    {logo ? <GridItem col={12} style={{ textAlign: "center" }}>
                        <Logo src={logo ?? ""} />
                    </GridItem> : null}
                    {brandName ? <GridItem col={12} style={{ textAlign: "center" }}>
                        {brandName}
                    </GridItem> : null}
                    {slogan ? <GridItem col={12} style={{ textAlign: "center" }}>
                        <Slogan align={"center"} style={{ flexDirection: "column", textAlign: "center" }}>{slogan}</Slogan>
                    </GridItem> : null}
                </GridContainer>
            }
        </footer >
    )
}