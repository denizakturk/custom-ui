
import React, { FC } from 'react'
import { HeaderProps } from "./Header.types"
import './Header.css'

export const Header: FC<HeaderProps> = ({ children, dropShadow }: { children?: any, dropShadow?: boolean }) => {
    let cls = "Customized-UI Header"
    if(dropShadow){
        cls += " BoxShadow"
    }
    return (
        <header className={cls}>
            {children}
        </header>
    )
}