import React, { FC } from 'react'
import { ParagraphProps } from "./Paragraph.types";
import './Paragraph.css'
import { ClassNames } from '../../ClassNames';
import { Styles } from '../../Styles';
export const Paragraph: FC<ParagraphProps> = ({ classNames, className, children, style }: { children?: any, fontFamily?: string, classNames?: string[], className?: string, style?: any }) => {
    let clsN = new ClassNames(["Customized-UI"])
    let styl = new Styles(style)
    clsN.add(className).addMany(classNames)
    return (
        <p className={clsN.getName()} style={styl.getStyle()}>{children}</p>
    )
}