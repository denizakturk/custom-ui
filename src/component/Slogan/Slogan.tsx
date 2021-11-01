import React, { FC } from 'react'
import { SloganProps } from "./Slogan.types";
import './Slogan.css'
export const Slogan: FC<SloganProps> = ({ children, align }: { children?: any, align?: string }) => {
    return (
        <div className="Customized-UI Slogan">{children}</div>
    )
}