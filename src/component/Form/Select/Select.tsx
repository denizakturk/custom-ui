import React, { FC } from 'react'
import { SelectProps } from './Select.types'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import { TemplateManager } from '../../template'
import './Select.css'
import { Icon } from '../../Icon'
export const Select: FC<SelectProps> = ({ placeholder, className, classNames, style, styles, selectedValue }: SelectProps) => {
    let styl = new Styles(TemplateManager.getSelect())
    styl.add(style)
    let clsN = new ClassNames(["Customized-UI", "Select"])
    clsN.add(className).addMany(classNames)
    let clsSearchInputDiv = new ClassNames(["Customized-UI", "Select-Search-Input-Div"])
    let clsSearchInput = new ClassNames(['Customized-UI', 'Select-Search-Input'])
    let clsDropdownList = new ClassNames(['Customized-UI', 'Dropdown-List', 'hide'])
    let clsDropdownButton = new ClassNames(['Customized-UI', 'Dropdown-Button'])
    let dropdownShow = false
    let toggleDropdownShow = () => {
        dropdownShow = !dropdownShow
        if (dropdownShow) {
            document.getElementById('Customized-UI-Select-Dropdown-List')?.classList.remove('hide')
        } else {
            document.getElementById('Customized-UI-Select-Dropdown-List')?.classList.add('hide')
        }
    }

    let setValue = (value: string) => {
        document.getElementById('Customized-UI-Select-Search-Input')?.setAttribute('value', value)
    }

    return (
        <React.Fragment>
            <div className={clsN.getName()}>
                <div className={clsSearchInputDiv.getName()}>
                    <input type="text" id="Customized-UI-Select-Search-Input" className={clsSearchInput.getName()} value={selectedValue} style={{ verticalAlign: "middle" }} />
                    <Icon name='expand_more' className={clsDropdownButton.getName()} onClick={toggleDropdownShow} style={{ verticalAlign: "middle" }} />
                </div>
                <div id="Customized-UI-Select-Dropdown-List" className={clsDropdownList.getName()}>
                    <ul style={{ listStyle: 'none', margin: 0 }}>
                        <li onClick={()=>{ setValue("Ev") }}>
                            Ev
                        </li>
                        <li  onClick={()=>{ setValue("Araba") }}>
                            Araba
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}