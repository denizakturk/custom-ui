import React, { FC } from 'react'
import { LogoProps } from './Logo.types'
import { Image } from '../../Article/Image'
import './Logo.css'
export const Logo: FC<LogoProps> = ({ src, style }: { src: string, style?:any }) => {
    return (
        <Image className="Logo" style={style} src={src} />
    )
}