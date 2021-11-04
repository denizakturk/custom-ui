import React, { FC } from 'react'
import { ImageProps } from './Image.types'
import './Image.css'
import { ClassNames } from '../../ClassNames'
export const Image: FC<ImageProps> = ({ src, fluid, rounded, style, className, classNames }: { src?: string, fluid?: boolean, rounded?: boolean, style?: any, className?: string, classNames?: string[] }) => {
    let clsN = new ClassNames(["Customized-UI", "Image"])
    clsN.add(className).addMany(classNames)
    if (fluid) {
        clsN.add("Fluid")
    }
    if (rounded) {
        clsN.add("RoundedBorder")
    }
    return (<img src={src} className={clsN.getName()} style={style} />)
}