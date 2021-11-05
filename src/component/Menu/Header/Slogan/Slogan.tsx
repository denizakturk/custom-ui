import React, { FC } from 'react'
import { SloganProps } from "./Slogan.types";
import './Slogan.css'
import { ClassNames } from '../../../ClassNames';
import { Styles } from '../../../Styles';
export const Slogan: FC<SloganProps> = ({ children, align, style, className, classNames }: { children?: any, align?: string, style?: any, className?: string, classNames?: string[] }) => {
    let clsN = new ClassNames(["Customized-UI", "Slogan"])
    let styl = new Styles(style)
    return (
        <div className={clsN.getName()} style={styl.getStyle()}>{children}</div>
    )
}