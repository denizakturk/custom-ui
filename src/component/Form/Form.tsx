import React, { FC } from "react";
import { ClassNames } from "../ClassNames";
import { Styles } from "../Styles";
import { TemplateManager } from "../template";
import { FormProps } from "./Form.types";

export const Form: FC<FormProps> = ({ action, method, children, style, styles, className, classNames }: FormProps) => {
    let formStyle = new Styles(TemplateManager.getForm())
    formStyle.add(style)
    let formClassName = new ClassNames(className)
    formClassName.addMany(classNames)
    return (
        <React.Fragment>
            <form className={formClassName.getName()} action={action ?? ""} method={method ?? "GET"} style={formStyle.getStyle()}>{children ?? ""}</form>
        </React.Fragment>
    )
}