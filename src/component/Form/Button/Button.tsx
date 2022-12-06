import React, { FC } from 'react'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import { ButtonProps } from './Button.types'
import './Button.css'
import { TemplateManager } from '../../template'
export const Button: FC<ButtonProps> = ({ children, label, style, className, classNames, type, onClick }: ButtonProps) => {
    let btnStyle = new Styles(TemplateManager.getButton())
    btnStyle.add(style)
    let clsName = new ClassNames(["Customized-UI", "Button"])
    clsName.add(className)
    clsName.addMany(classNames)

    return (
        <button onClick={onClick} type={type ?? "button"} className={clsName.getName()} style={btnStyle.getStyle()}>{label ?? children}</button>
    )
}