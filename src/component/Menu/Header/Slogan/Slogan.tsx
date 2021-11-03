import React, { FC } from 'react'
import { SloganProps } from "./Slogan.types";
import './Slogan.css'
export const Slogan: FC<SloganProps> = ({ children, align, style }: { children?: any, align?: string, style?:any }) => {
    return (
        <div className="Customized-UI Slogan" style={style}>{children}</div>
    )
}