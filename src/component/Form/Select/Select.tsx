import React, { FC } from 'react'
import { SelectProps, SelectValueProps } from './Select.types'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import { TemplateManager } from '../../template'
//import './Select.css'
import { Icon } from '../../Icon'
import { IconStyle } from '../../template.classes'
export const Select: FC<SelectProps> = ({ name, values, placeholder, className, classNames, style, styles, selectedValue, selectedValues, isSearchable = false, onChange, isMultiple }: SelectProps) => {
    let mainDivStyle = new Styles(TemplateManager.getSelect())
    let dropDownListDivStyle = new Styles(TemplateManager.getSelect())
    let dropdownIconStyle = new Styles(new IconStyle(TemplateManager.getSelect()))
    let searchInputStyle = new Styles(TemplateManager.getSelect())
    let multipleSelectItemIconStyle = new Styles(styles?.MultipleSelectIcon)
    multipleSelectItemIconStyle.add({ verticalAlign: "bottom" })
    let multipleItemStyle = new Styles(styles?.MultipleSelectedItem)
    let multipleItemContainerStyle = new Styles(styles?.MultipleSelectedContainer)
    let multipleSelectedItemCloseStyle = new Styles({verticalAlign:"middle", cursor:"pointer", fontSize:"18px"})
    multipleSelectedItemCloseStyle.add(styles?.MultipleSelectedItemClose)
    searchInputStyle.add({ verticalAlign: "middle" })
    dropdownIconStyle.add({ verticalAlign: "middle" })
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
            document.getElementById('Customized-UI-Select-Dropdown-List' + name)?.classList.add('show')
        } else {
            document.getElementById('Customized-UI-Select-Dropdown-List' + name)?.classList.remove('show')
        }
    }
    var multiple: SelectValueProps[] = selectedValues ?? [];
    const setMultipleValues = (value: SelectValueProps) => {
        let isContain = false;
        multiple.forEach((val, index) => {
            if (val.id == value.id) {
                multiple.splice(index, 1)
                isContain = true
            }
        })
        if (!isContain) {
            multiple.push(value)
        }
        if (onChange) {
            onChange(multiple)
        }
    }

    let setValue = (value: SelectValueProps) => {
        document.getElementById('Customized-UI-Select-Search-Input' + name)?.setAttribute('value', value.name)
        document.getElementById('Customized-UI-Select-Value' + name)?.setAttribute('value', value.id)
        if (onChange) { onChange(value) }
        toggleDropdownShow()
    }
    if (typeof window !== 'undefined') {
        var searchInputRef = document.getElementById('Customized-UI-Select-Search-Input' + name);
        var dropdownIconRef = document.getElementById('Customized-UI-Select-Dropdown-Icon' + name);
        var selectArea = document.getElementById('Customized-UI-Select-Area' + name);
    }
    if (typeof window !== 'undefined') {
        document.addEventListener('click', function (event) {
            if (searchInputRef && dropdownIconRef && selectArea && event.target) {
                if (!searchInputRef.contains(event.target as Node) && !dropdownIconRef.contains(event.target as Node) && !selectArea.contains(event.target as Node)) {
                    dropdownShow = false
                    document.getElementById('Customized-UI-Select-Dropdown-List' + name)?.classList.remove('show')
                }
            }
        });
    }
    return (
        <React.Fragment>
            <div className={clsN.getName()} id={"Customized-UI-Select-Area" + name} style={mainDivStyle.getStyle()}>
                {isMultiple && multiple?.length ?
                    <div className={"Customized-UI-Selected-Item-Container"} style={multipleItemContainerStyle?.getStyle()}>
                        {multiple?.map((val, index) => {
                            return <label className={"Customized-UI-Selected-Item"} key={index} style={multipleItemStyle?.getStyle()}>{val.name} <Icon name="close" onClick={()=>{setMultipleValues(val)}} size={18} style={multipleSelectedItemCloseStyle.getStyle()}/></label>
                        })}
                    </div>
                    : null}
                <input id={"Customized-UI-Select-Value" + name} type="hidden" value={selectedValue?.id} name={name ?? "select-value"} />
                <div className={clsSearchInputDiv.getName()}>
                    <input type="text" placeholder={placeholder ?? ""} id={"Customized-UI-Select-Search-Input" + name} className={clsSearchInput.getName()} readOnly={!isSearchable} value={selectedValue?.name} style={searchInputStyle.getStyle()} />
                    <Icon id={"Customized-UI-Select-Dropdown-Icon" + name} name='expand_more' className={clsDropdownButton.getName()} onClick={toggleDropdownShow} style={dropdownIconStyle.getStyle()} />
                </div>
                <div id={"Customized-UI-Select-Dropdown-List" + name} className={clsDropdownList.getName()} style={dropDownListDivStyle.getStyle()}>
                    <ul style={{ listStyle: 'none', margin: 0 }}>
                        {values.map((val, index) => {
                            return (
                                <li onClick={() => { isMultiple ? setMultipleValues(val) : setValue(val) }} key={index}>
                                    {val.name} {isMultiple && multiple?.findIndex(x => x.id == val.id) > -1 ? <Icon name={"done"} style={multipleSelectItemIconStyle.getStyle()} /> : null}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}