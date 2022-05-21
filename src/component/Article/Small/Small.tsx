import React, { FC } from 'react'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import { SmallProps } from './Small.types'
import { TemplateManager } from '../../template'
export const Small: FC<SmallProps> = ({ children, className, classNames, style }: SmallProps) => {
    let styl = new Styles(TemplateManager.getSmall())
    styl.add(style)
    let clsN = new ClassNames();
    clsN.add(className).addMany(classNames)
    return (
        <small className={clsN.getName()} style={styl.getStyle()}>{children}</small>
    )
}