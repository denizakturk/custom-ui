import React, { FC } from 'react'
import { FontsProps } from './Fonts.types'
export const Fonts: FC<FontsProps> = ({ href }: { href?: string }) => {
    var link1 = document.createElement("link");
    link1.setAttribute("href", href as string);
    link1.setAttribute("rel", "stylesheet");
    var link2 = document.createElement("link");
    link2.setAttribute("href", "https://fonts.googleapis.com");
    var link3 = document.createElement("link");
    link3.setAttribute("href", "https://fonts.gstatic.com");
    link3.setAttribute("cross-origin", "");

    document.head.appendChild(link2);
    document.head.appendChild(link3);
    document.head.appendChild(link1);
    return (
        <></>
    )
}