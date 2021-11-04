import React, { FC } from 'react'
import { LogoProps } from './Logo.types'
import { Image } from '../../Article/Image'
import './Logo.css'
import { ClassNames } from '../../ClassNames'
export const Logo: FC<LogoProps> = ({ src, style, className, classNames }: { src: string, style?: any, className?: string, classNames?: string[] }) => {
    let clsN = new ClassNames(['Logo'])
    clsN.add(className).addMany(classNames)
    return (
        <Image className={clsN.getName()} style={style} src={src} />
    )
}