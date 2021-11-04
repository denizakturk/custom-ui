import React, { FC } from 'react'
import { ParagraphProps } from "./Paragraph.types";
import './Paragraph.css'
import { ClassNames } from '../../ClassNames';
export const Paragraph: FC<ParagraphProps> = ({ classNames, className, children, fontFamily }: { children?: any, fontFamily?: string, classNames?: string[], className?: string }) => {
    let clsN = new ClassNames(["Customized-UI"])
    clsN.add(className).addMany(classNames)
    let styl = {}
    if (fontFamily) {
        styl = { fontFamily: fontFamily, ...styl }
    }
    return (
        <p className={clsN.getName()} style={styl}>{children}</p>
    )
}