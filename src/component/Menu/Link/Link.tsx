import React, { FC } from 'react'
import { ClassNames } from '../../ClassNames'
import { Icon } from "../../Icon"
import { LinkProps } from './Link.types'

export const Link: FC<LinkProps> = ({ href, children, icon, onClick, style, className, classNames }: { href?: string, children?: any, icon?: string, onClick?: any, style?: any, className?: string, classNames?: string[] }) => {
    let clsN = new ClassNames()
    clsN.add(className).addMany(classNames)
    return (
        <a href={href} onClick={onClick} style={style} className={clsN.getName()}>
            {icon ? <Icon name={icon} size={36} style={{ marginRight: "5px", verticalAlign: "middle" }} /> : null}
            {children}
        </a>
    )
}