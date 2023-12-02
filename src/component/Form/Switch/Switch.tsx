import React, { FC } from "react";
import { SwitchProps } from './Switch.types'
//import './Switch.css'
export const Switch: FC<SwitchProps> = ({ className, classNames, id, style, styles, defaultStatus, name, value, radio=false, onChange }: SwitchProps) => {

    const statusContainerRef = React.createRef<HTMLDivElement>()
    const switchButtonRef = React.createRef<HTMLDivElement>()
    const checkboxRef = React.createRef<HTMLInputElement>()

    let groupElements: NodeListOf<HTMLInputElement>
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
        if (checkboxRef.current) {
            checkboxRef.current.checked = switchStatus
            if (onChange) {
                if(switchStatus){
                    onChange(value ?? "")
                } else {
                    onChange("")
                }
                
            }
        }
        if (switchStatus) {
            if (!statusContainerRef.current?.classList?.contains('true')) {
                statusContainerRef.current?.classList?.add('true')
            }
            if (!switchButtonRef.current?.classList?.contains('true')) {
                switchButtonRef.current?.classList?.add('true')
            }
        } else {
            if (statusContainerRef.current?.classList?.contains('true')) {
                statusContainerRef.current?.classList?.remove('true')
            }
            if (switchButtonRef.current?.classList?.contains('true')) {
                switchButtonRef.current?.classList?.remove('true')
            }
        }
    }
    let setDefaultStatus = () => {
        if (checkboxRef?.current && defaultStatus) {
            checkboxRef.current.checked = false
            switchStatus = false
            setTimeout(()=>{toggleSwitch()}, 500)
        }
    }
    let getGroupedElements = (): NodeListOf<HTMLInputElement> => {
        return document.querySelectorAll('.Customized-UI.Switch.Button' + (name ? "." + name : "") + '.true:not(.' + checkboxIdentity + ')') as NodeListOf<HTMLInputElement>;
    }
    if (typeof window != "undefined") {
        setDefaultStatus()
    }
    return (<div className="Customized-UI Switch-Container">
        <div ref={statusContainerRef} className="Customized-UI Switch Status-Container">
            <div ref={switchButtonRef} className={"Customized-UI Switch Button" + (name ? " " + name : "") + (checkboxIdentity ? " " + checkboxIdentity : "")} onClick={toggleSwitch}></div>
            <input ref={checkboxRef} type="checkbox" name={name} style={{ display: "none" }} value={value} defaultChecked={switchStatus} />
        </div>
    </div>)
}