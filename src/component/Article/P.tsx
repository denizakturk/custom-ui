import React, { FC } from 'react'
import { PProps } from "./P.types";
import './P.css'
export const P: FC<PProps> = ({ children, fontFamily }: { children?: any, fontFamily?: string }) => {
    let styl = {}
    if (fontFamily) {
        styl = { fontFamily: fontFamily, ...styl }
    }
    return (
        <p className="Customized-UI" style={styl}>{children}</p>
    )
}