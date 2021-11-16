import React, { FC } from 'react'
import { LogoProps } from './Logo.types'
import { Image } from '../../Article/Image'
import './Logo.css'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import { Link } from '../Link'
import { TemplateManager } from '../../template'
export const Logo: FC<LogoProps> = ({ src, style, className, classNames, link, alt, title }: { src: string, style?: any, className?: string, classNames?: string[], link?: string, alt?: string, title?: string }) => {
    let styl = new Styles(TemplateManager.getLogo())
    styl.add(style)

    let clsN = new ClassNames(['Logo'])
    clsN.add(className).addMany(classNames)
    return (
        link ?
            <Link href={link}>
                <Image className={clsN.getName()} alt={alt} title={title} style={styl.getStyle()} src={src} />
            </Link>
            :
            <Image className={clsN.getName()} alt={alt} title={title} style={styl.getStyle()} src={src} />
    )
}