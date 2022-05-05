import React, { FC } from 'react'
import { IconProps } from "./Icon.types";
import './Icon.css'
import { ClassNames } from '../ClassNames';
import { Styles } from '../Styles';
import { TemplateManager } from '../template';
var fontLoad: boolean = false

export const Icon: FC<IconProps> = ({ name, color, size, style, onClick, className, classNames, id }: { name: string, color?: string, size?: number, style?: any, onClick?: any, className?: string, classNames?: string[], id?: string }) => {
    let styl = new Styles(TemplateManager.getIcon())
    styl.add(style)
    let clsN = new ClassNames(["material-icons"])
    clsN.add(className).addMany(classNames)
    if (!fontLoad && typeof window !== "undefined") {
        var sc = document.createElement("link");
        sc.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Icons");
        sc.setAttribute("rel", "stylesheet");
        document.head.appendChild(sc);
        fontLoad = true
    }
    if (size) {
        clsN.add("md-" + size)
    }
    return (
        <span className={clsN.getName()} style={styl.getStyle()} onClick={onClick} id={id ?? ""}>
            {name}
        </span>
    )
}