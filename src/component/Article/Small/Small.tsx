import React, { FC } from 'react'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import { SmallProps } from './Small.types'

export const Small: FC<SmallProps> = ({ children, className, classNames, style }: { children?: any, className?: string, classNames?: string[], style?: any }) => {
    let styl = new Styles(style)
    let clsN = new ClassNames();
    clsN.add(className).addMany(classNames)
    return (<small className={clsN.getName()} style={styl.getStyle()}>{children}</small>)
}