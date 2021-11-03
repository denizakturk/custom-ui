import React, { FC } from 'react'
import { Icon } from "../../Icon"
import { LinkProps } from './Link.types'

export const Link: FC<LinkProps> = ({ href, children, icon, onClick, style }: { href?: string, children?: any, icon?: string, onClick?: any, style?: any }) => {
    return (
        <a href={href} onClick={onClick} style={style}>
            {icon ? <Icon name={icon} size={36} style={{ marginRight: "5px", verticalAlign: "middle" }} /> : null}
            {children}
        </a>
    )
}