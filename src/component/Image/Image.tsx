import React, { FC } from 'react'
import { ImageProps } from './Image.types'
import './Image.css'
export const Image: FC<ImageProps> = ({ src, fluid, rounded, style }: { src?: string, fluid?: boolean, rounded?: boolean, style?: any }) => {
    let clsName: string = "Customized-UI Img"
    if (fluid) {
        clsName += " Fluid "
    }
    if (rounded) {
        clsName += " RoundedBorder "
    }
    return (<img src={src} className={clsName} style={style} />)
}