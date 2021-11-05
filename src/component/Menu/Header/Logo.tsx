import React, { FC } from 'react'
import { LogoProps } from './Logo.types'
import { Image } from '../../Article/Image'
import './Logo.css'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
export const Logo: FC<LogoProps> = ({ src, style, className, classNames }: { src: string, style?: any, className?: string, classNames?: string[] }) => {
    let styl = new Styles(style)
    let clsN = new ClassNames(['Logo'])
    clsN.add(className).addMany(classNames)
    return (
        <Image className={clsN.getName()} style={styl.getStyle()} src={src} />
    )
}