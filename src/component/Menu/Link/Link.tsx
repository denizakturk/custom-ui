import React, { FC } from 'react'
import { ClassNames } from '../../ClassNames'
import { Icon } from "../../Icon"
import { Styles } from '../../Styles'
import { LinkProps, LinkStylesProps } from './Link.types'

export const Link: FC<LinkProps> = ({ href, children, icon, onClick, style, styles, className, classNames }: { href?: string, children?: any, icon?: string, onClick?: any, style?: any, styles?: LinkStylesProps, className?: string, classNames?: string[] }) => {
    let stylIcon = new Styles({ marginRight: "5px", verticalAlign: "middle" })
    let styl = new Styles(style)
    styl.add(styles?.link)
    stylIcon.add(styles?.icon)
    let clsN = new ClassNames()
    clsN.add(className).addMany(classNames)
    return (
        <a href={href} onClick={onClick} style={styl.getStyle()} className={clsN.getName()}>
            {icon ? <Icon name={icon} size={36} style={stylIcon.getStyle()} /> : null}
            {children}
        </a>
    )
}