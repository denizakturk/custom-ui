import React, { FC } from 'react'
import { ParagraphProps } from "./Paragraph.types";
import './Paragraph.css'
import { ClassNames } from '../../ClassNames';
import { Styles } from '../../Styles';
import { ContentHelper } from '../../helper';
export const Paragraph: FC<ParagraphProps> = ({ text, nl2br, classNames, className, children, style }: { text?: string, nl2br?: boolean, children?: any, fontFamily?: string, classNames?: string[], className?: string, style?: any }) => {
    let contentHelper = new ContentHelper
    let clsN = new ClassNames(["Customized-UI"])
    let styl = new Styles(style)
    clsN.add(className).addMany(classNames)
    if (nl2br && text) {
        text = text.replace(/(?:\r\n|\r|\n)/g, '<br />')
    }
    return (
        <p className={clsN.getName()} style={styl.getStyle()} dangerouslySetInnerHTML={contentHelper.createMarkup(text ?? "")}>{children}</p>
    )
}