import React, { FC } from 'react'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import './Container.css'
import { ContainerProps } from './Container.types'
export const Container: FC<ContainerProps> = ({ children, className, classNames, style }: { children?: any, className?: string, classNames?: string[], style?: any }) => {
    let styl = new Styles(style)
    let clsN = new ClassNames(["Customized-UI", "Container"])
    clsN.add(className).addMany(classNames)
    return (
        <div className={clsN.getName()} style={styl.getStyle()}>
            {children}
        </div>
    )
}