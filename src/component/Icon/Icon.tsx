import React, { FC } from 'react'
import { Fonts } from '..';
import { IconProps } from "./Icon.types";
import './Icon.css'
var fontLoad: boolean = false
const loadFont = <Fonts href="https://fonts.googleapis.com/css2?family=Material+Icons" />

export const Icon: FC<IconProps> = ({ name, color }: { name: string, color?: string }) => {
    if (!fontLoad) {
        var sc = document.createElement("link");
        sc.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Icons");
        sc.setAttribute("rel", "stylesheet");
        document.head.appendChild(sc);
        fontLoad = true
    }
    return (
        <span className="material-icons">
            {name}
        </span>
    )
}