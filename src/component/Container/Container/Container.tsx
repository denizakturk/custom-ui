import React, { FC } from 'react'
import { ClassNames } from '../../ClassNames'
import './Container.css'
import { ContainerProps } from './Container.types'
export const Container: FC<ContainerProps> = ({ children, className, classNames }: { children?: any, className?: string, classNames?: string[] }) => {
    let clsN = new ClassNames(["Customized-UI", "Container"])
    clsN.add(className).addMany(classNames)
    return (
        <div className={clsN.getName()}>
            {children}
        </div>
    )
}