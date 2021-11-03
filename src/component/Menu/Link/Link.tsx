import React, { FC } from 'react'
import { Icon } from "../../Icon"
import { LinkProps } from './Link.types'

export const Link: FC<LinkProps> = ({ href, children, icon, onClick }: { href?: string, children?: any, icon?: string, onClick?: any }) => {
    return (
        <a href={href} onClick={onClick}>
            {icon ? <Icon name={icon} style={{ marginRight: "5px" }} /> : null}
            {children}
        </a>
    )
}