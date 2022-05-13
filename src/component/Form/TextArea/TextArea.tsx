import React, { FC } from "react";
import { ClassNames } from "../../ClassNames";
import { Styles } from "../../Styles";
import { TemplateManager } from "../../template";
import { TextAreaProps } from "./TextArea.types";
import './TextArea.css'

export const TextArea: FC<TextAreaProps> = ({ name, value, rows, readOnly, id, className, classNames, style, resize }: TextAreaProps) => {
    let textAreaClassName = new ClassNames(['Customized-UI', 'TextArea'])
    let textAreaStyle = new Styles(TemplateManager.getTextArea())
    textAreaStyle.add(style)
    textAreaClassName.add(className)
    textAreaClassName.addMany(classNames)
    if (resize === false) {
        textAreaStyle.add({ resize: "none" })
    }
    return (
        <React.Fragment>
            <textarea name={name ?? ""} rows={rows ?? 3} readOnly={readOnly} id={id ?? ""} className={textAreaClassName.getName()} style={textAreaStyle.getStyle()}>{value ?? ""}</textarea>
        </React.Fragment>
    )
}