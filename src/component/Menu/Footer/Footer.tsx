import React, { FC } from 'react'
import { Logo, Slogan } from '../../Menu/Header'
import { GridContainer, GridItem } from '../../Grid'
import { FooterProps } from './Footer.types'

export const Footer: FC<FooterProps> = ({ children, style, logo, brandName, slogan, dropShadow }: { children?: any, style?: any, logo?: string, brandName?: string, slogan?: string, dropShadow?: boolean }) => {
    let clsName = "Customized-UI Footer"
    if (dropShadow) {
        clsName += " BoxShadow "
    }
    return (
        <footer className={clsName}>
            {children ??
                <GridContainer>
                    {logo ? <GridItem col={12} style={{ textAlign: "center" }}>
                        <Logo src={logo ?? ""} />
                    </GridItem> : null}
                    {brandName ? <GridItem col={12} style={{textAlign: "center"}}>
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