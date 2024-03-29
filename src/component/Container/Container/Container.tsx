import React, { FC } from 'react'
//import './Container.css'
import { ContainerProps } from './Container.types'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import { TemplateManager } from '../../template'
export const Container: FC<ContainerProps> = ({ children, className, classNames, style }: ContainerProps) => {
    let styl = new Styles(TemplateManager.getContainer())
    styl.add(style)
    let clsN = new ClassNames(["Customized-UI", "Container"])
    clsN.add(className).addMany(classNames)
    return (
        <div className={clsN.getName()} style={styl.getStyle()}>
            {children}
        </div>
    )
}