import React, { FC } from 'react'
import { FontsProps } from './Fonts.types'
var fontIsImported:Array<string> = [];
export const Fonts: FC<FontsProps> = ({ href }: FontsProps) => {
    if (typeof window !== "undefined" && href && fontIsImported.includes(href)) {
        let styleSheetLink = document.createElement("link");
        let fontsGoogleApiLink = document.createElement("link");
        let fontsGstaticLink = document.createElement("link");
        styleSheetLink.setAttribute("href", href as string);
        styleSheetLink.setAttribute("rel", "stylesheet");
        fontsGoogleApiLink.setAttribute("href", "https://fonts.googleapis.com");
        fontsGstaticLink.setAttribute("href", "https://fonts.gstatic.com");
        fontsGstaticLink.setAttribute("cross-origin", "");
        document.head.appendChild(styleSheetLink);
        document.head.appendChild(fontsGoogleApiLink);
        document.head.appendChild(fontsGstaticLink);
        fontIsImported.push(href)
    }
    return (
        <></>
    )
}