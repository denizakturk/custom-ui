import React, { FC } from 'react'
import { ImageProps } from './Image.types'
import './Image.css'
export const Image: FC<ImageProps> = ({ src, fluid, rounded, style, className }: { src?: string, fluid?: boolean, rounded?: boolean, style?: any, className?: string }) => {
    let clsName: string = "Customized-UI Image"
    if (fluid) {
        clsName += " Fluid "
    }
    if (rounded) {
        clsName += " RoundedBorder "
    }
    if (className) {
        clsName += ` ${className} `
    }
    return (<img src={src} className={clsName} style={style} />)
}