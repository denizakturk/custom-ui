import React, { FC } from 'react'
import { ClassNames } from '../../ClassNames'
import { SmallProps } from './Small.types'

export const Small: FC<SmallProps> = ({ children, className, classNames }: { children?: any, className?: string, classNames?: string[] }) => {
    let clsN = new ClassNames();
    clsN.add(className).addMany(classNames)
    return (<small className={clsN.getName()}>{children}</small>)
}