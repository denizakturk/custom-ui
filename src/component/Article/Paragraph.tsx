import React, { FC } from 'react'
import { ParagraphProps } from "./Paragraph.types";
import './Paragraph.css'
export const Paragraph: FC<ParagraphProps> = ({ children, fontFamily }: { children?: any, fontFamily?: string }) => {
    let styl = {}
    if (fontFamily) {
        styl = { fontFamily: fontFamily, ...styl }
    }
    return (
        <p className="Customized-UI" style={styl}>{children}</p>
    )
}