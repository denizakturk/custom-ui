import React, { FC } from 'react'
import { ImageProps } from './Image.types'
import './Image.css'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
export const Image: FC<ImageProps> = ({ src, fluid, rounded, style, className, classNames, heightFit }: { src?: string, fluid?: boolean, rounded?: boolean, style?: any, className?: string, classNames?: string[], heightFit?: string }) => {
    let clsN = new ClassNames(["Customized-UI", "Image"])
    let styl = new Styles(style)
    clsN.add(className).addMany(classNames)
    if (fluid) {
        clsN.add("Fluid")
    }
    if (rounded) {
        clsN.add("RoundedBorder")
    }
    if (heightFit) {
        clsN.add("HeightFit")
        styl.add({ maxHeight: heightFit })
    }
    return (<img src={src} className={clsN.getName()} style={styl.getStyle()} />)
}