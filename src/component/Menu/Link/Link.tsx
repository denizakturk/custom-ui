import React, { FC } from 'react'
import { ClassNames } from '../../ClassNames'
import { Icon } from "../../Icon"
import { Styles } from '../../Styles'
import { LinkProps } from './Link.types'
import { TemplateManager } from '../../template'
export const Link: FC<LinkProps> = ({ href, children, icon, onClick, style, styles, className, classNames, iconSize }: LinkProps) => {
    let stylIcon = new Styles(TemplateManager.getIcon())
    stylIcon.add({ marginRight: "5px", verticalAlign: "middle" })
    stylIcon.add(styles?.icon)

    let styl = new Styles(TemplateManager.getLink())
    styl.add(style)
    styl.add(styles?.link)

    let clsN = new ClassNames(["Customized-UI", "Link"])
    clsN.add(className).addMany(classNames)
    return (
        <a href={href} onClick={onClick} style={styl.getStyle()} className={clsN.getName()}>
            {icon ? <Icon name={icon} size={iconSize ?? 36} style={stylIcon.getStyle()} /> : null}
            {children}
        </a>
    )
}