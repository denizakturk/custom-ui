import React, { FC } from 'react'
import { FontsProps } from './Fonts.types'
export const Fonts: FC<FontsProps> = ({ href }: FontsProps) => {
    if (typeof window !== "undefined") {
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
    }
    return (
        <></>
    )
}