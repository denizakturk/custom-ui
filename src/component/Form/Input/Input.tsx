import React, { ChangeEvent, ChangeEventHandler, FC } from "react";
import { ClassNames } from "../../ClassNames";
import { Styles } from "../../Styles";
import { TemplateManager } from "../../template";
import { InputProps } from "./Input.types";
import './Input.css'

export const Input: FC<InputProps> = ({ name, defaultValue, type, style, className, classNames, onChange, placeholder }: InputProps) => {
    let inputStyle = new Styles(TemplateManager.getInput())
    inputStyle.add(style)
    let inputClass = new ClassNames(["Customized-UI", "Input"])
    inputClass.addMany(classNames)
    inputClass.add(className)

    let value = defaultValue

    let changeEvent = (e: ChangeEvent<HTMLInputElement>) => { if (onChange) { onChange(e) } }

    return (
        <React.Fragment>
            <input placeholder={placeholder ?? ""} onChange={changeEvent} name={name ?? ""} type={type} value={value} style={inputStyle.getStyle()} className={inputClass.getName()} />
        </React.Fragment>
    )
}