import React, { FC } from 'react'
import { IconProps } from "./Icon.types";
import './Icon.css'
var fontLoad: boolean = false

export const Icon: FC<IconProps> = ({ name, color, size, style, onClick }: { name: string, color?: string, size?: number, style?: any, onClick?: any }) => {
    if (!fontLoad) {
        var sc = document.createElement("link");
        sc.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Icons");
        sc.setAttribute("rel", "stylesheet");
        document.head.appendChild(sc);
        fontLoad = true
    }
    let clsName: string = "material-icons"
    let sizeCls: string
    if (size) {
        sizeCls = "md-" + size
        clsName += " " + sizeCls
    }
    return (
        <span className={clsName} style={style} onClick={onClick}>
            {name}
        </span>
    )
}