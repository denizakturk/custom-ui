import React, { FC } from 'react'
import { SloganProps } from "./Slogan.types";
//import './Slogan.css'
import { ClassNames } from '../../../ClassNames';
import { Styles } from '../../../Styles';
import { TemplateManager } from '../../../template';
export const Slogan: FC<SloganProps> = ({ children, style }: SloganProps) => {
    let clsN = new ClassNames(["Customized-UI", "Slogan"])
    let styl = new Styles(TemplateManager.getSlogan())
    styl.add(style)
    return (
        <div className={clsN.getName()} style={styl.getStyle()}>{children}</div>
    )
}