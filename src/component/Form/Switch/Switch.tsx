import React, { FC } from "react";
import { SwitchProps } from './Switch.types'
//import './Switch.css'
export const Switch: FC<SwitchProps> = ({ className, classNames, id, style, styles, defaultStatus, name, value, radio=false, onChange }: SwitchProps) => {
    let groupElements: NodeListOf<HTMLInputElement>
    var statusContainer: HTMLElement | null
    let switchButton: HTMLElement | null
    let checkbox: HTMLInputElement | null
    let checkboxIdentity: string = (name ?? "") + (value ?? "")
    let switchStatus = false;

    let allPassive = () => {
        groupElements = getGroupedElements()
        if (groupElements.length > 0) {
            groupElements.forEach(item => { item.click() })
        }
    }
    let toggleSwitch = () => {

        if (radio) {
            allPassive()
        }
        switchStatus = !switchStatus
        if (checkbox) {
            checkbox.checked = switchStatus
            if (onChange) {
                if(switchStatus){
                    onChange(value ?? "")
                } else {
                    onChange("")
                }
                
            }
        }
        if (switchStatus) {
            if (!statusContainer?.classList?.contains('true')) {
                statusContainer?.classList?.add('true')
            }
            if (!switchButton?.classList?.contains('true')) {
                switchButton?.classList?.add('true')
            }
        } else {
            if (statusContainer?.classList?.contains('true')) {
                statusContainer?.classList?.remove('true')
            }
            if (switchButton?.classList?.contains('true')) {
                switchButton?.classList?.remove('true')
            }
        }
    }
    let setDefaultStatus = () => {
        if (checkbox && defaultStatus) {
            checkbox.checked = false
            switchStatus = false
            setTimeout(()=>{toggleSwitch()}, 500)
        }
    }
    let getGroupedElements = (): NodeListOf<HTMLInputElement> => {
        return document.querySelectorAll('.Customized-UI.Switch.Button' + (name ? "." + name : "") + '.true:not(.' + checkboxIdentity + ')') as NodeListOf<HTMLInputElement>;
    }
    if (typeof window != "undefined") {
        statusContainer = document.getElementById('Customized-UI-Switch-StatusContainer' + (checkboxIdentity ?? "")) as HTMLElement | null
        switchButton = document.getElementById("Customized-UI-Switch-Button" + (checkboxIdentity ?? "")) as HTMLElement | null
        checkbox = document.getElementById(
            "Customized-UI-Checkbox-" + (checkboxIdentity ?? ""),
        ) as HTMLInputElement | null;
        setDefaultStatus()
    }
    return (<div className="Customized-UI Switch-Container">
        <div id={"Customized-UI-Switch-StatusContainer" + (checkboxIdentity ?? "")} className="Customized-UI Switch Status-Container">
            <div id={"Customized-UI-Switch-Button" + (checkboxIdentity ?? "")} className={"Customized-UI Switch Button" + (name ? " " + name : "") + (checkboxIdentity ? " " + checkboxIdentity : "")} onClick={toggleSwitch}></div>
            <input id={"Customized-UI-Checkbox-" + (checkboxIdentity ?? "")} type="checkbox" name={name} style={{ display: "none" }} value={value} defaultChecked={switchStatus} />
        </div>
    </div>)
}