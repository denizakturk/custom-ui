import React, { FC } from 'react'
import { SelectProps, SelectValueProps } from './Select.types'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import { TemplateManager } from '../../template'
import './Select.css'
import { Icon } from '../../Icon'
export const Select: FC<SelectProps> = ({ name, values, placeholder, className, classNames, style, styles, selectedValue, isSearchable = false }: { name?: string, placeholder?: string, className?: string, classNames?: string[], style?: any, styles?: any, selectedValue?: SelectValueProps, values: SelectValueProps[], isSearchable?: boolean }) => {
    let mainDivStyle = new Styles(TemplateManager.getSelect())
    mainDivStyle.add(style)
    let clsN = new ClassNames(["Customized-UI", "Select"])
    clsN.add(className).addMany(classNames)
    let clsSearchInputDiv = new ClassNames(["Customized-UI", "Select-Search-Input-Div"])
    let clsSearchInput = new ClassNames(['Customized-UI', 'Select-Search-Input'])
    let clsDropdownList = new ClassNames(['Customized-UI', 'Dropdown-List'])
    let clsDropdownButton = new ClassNames(['Customized-UI', 'Dropdown-Button'])
    let dropdownShow = false
    let toggleDropdownShow = () => {
        dropdownShow = !dropdownShow
        if (dropdownShow) {
            document.getElementById('Customized-UI-Select-Dropdown-List')?.classList.add('show')
        } else {
            document.getElementById('Customized-UI-Select-Dropdown-List')?.classList.remove('show')
        }
    }

    let setValue = (value: SelectValueProps) => {
        document.getElementById('Customized-UI-Select-Search-Input')?.setAttribute('value', value.name)
        document.getElementById('Customized-UI-Select-Value')?.setAttribute('value', value.id)
        toggleDropdownShow()
    }
    if (typeof window !== 'undefined') {
        var searchInputRef = document.getElementById('Customized-UI-Select-Search-Input');
        var dropdownIconRef = document.getElementById('Customized-UI-Select-Dropdown-Icon');
        var selectArea = document.getElementById('Customized-UI-Select-Area');
    }
    if (typeof window !== 'undefined') {
        document.addEventListener('click', function (event) {
            if (searchInputRef && dropdownIconRef && selectArea && event.target) {
                if (!searchInputRef.contains(event.target as Node) && !dropdownIconRef.contains(event.target as Node) && !selectArea.contains(event.target as Node)) {
                    dropdownShow = false
                    document.getElementById('Customized-UI-Select-Dropdown-List')?.classList.remove('show')
                }
            }
        });
    }

    return (
        <React.Fragment>
            <div className={clsN.getName()} id="Customized-UI-Select-Area" style={mainDivStyle.getStyle()}>
                <input id="Customized-UI-Select-Value" type="hidden" value={selectedValue?.id} name={name ?? "select-value"} />
                <div className={clsSearchInputDiv.getName()}>
                    <input type="text" placeholder={placeholder ?? ""} id="Customized-UI-Select-Search-Input" className={clsSearchInput.getName()} readOnly={!isSearchable} value={selectedValue?.name} style={{ verticalAlign: "middle" }} />
                    <Icon id="Customized-UI-Select-Dropdown-Icon" name='expand_more' className={clsDropdownButton.getName()} onClick={toggleDropdownShow} style={{ verticalAlign: "middle" }} />
                </div>
                <div id="Customized-UI-Select-Dropdown-List" className={clsDropdownList.getName()}>
                    <ul style={{ listStyle: 'none', margin: 0 }}>
                        {values.map((val, index) => {
                            return (
                                <li onClick={() => { setValue(val) }} key={index}>
                                    {val.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}