import React, { FC } from 'react'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import { ButtonProps } from './Button.types'
import './Button.css'
export const Button: FC<ButtonProps> = ({ children, label, style, className, classNames, type }: { children?: any, label?: string, style?: any, className?: string, classNames?: string[], type?: "button" | "submit" | "reset" }) => {
    let btnStyle = new Styles(style)
    let clsName = new ClassNames(["Customized-UI", "Button"])
    clsName.add(className)
    clsName.addMany(classNames)

    return (<button type={type ?? "button"} className={clsName.getName()} style={btnStyle.getStyle()}>{label ?? children}</button>)
}