import React, { FC } from "react";
import { ClassNames } from "../../ClassNames";
import { Styles } from "../../Styles";
import { TemplateManager } from "../../template";
import { InputProps } from "./Input.types";
import './Input.css'

export const Input: FC<InputProps> = ({ name, defaultValue, type, style, className, classNames }: InputProps) => {
    let inputStyle = new Styles(TemplateManager.getInput())
    inputStyle.add(style)
    let inputClass = new ClassNames(["Customized-UI", "Input"])
    inputClass.addMany(classNames)
    inputClass.add(className)

    let value = defaultValue

    return (
        <React.Fragment>
            <input name={name ?? ""} type={type} value={value} style={inputStyle.getStyle()} className={inputClass.getName()} />
        </React.Fragment>
    )
}