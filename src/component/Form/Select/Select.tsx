import React, { FC } from 'react'
import { SelectProps, SelectValueProps } from './Select.types'
import { ClassNames } from '../../ClassNames'
import { Styles } from '../../Styles'
import { TemplateManager } from '../../template'
//import './Select.css'
import { Icon } from '../../Icon'
import { IconStyle } from '../../template.classes'
let lastId = 0;
function getNextId(){lastId++;return lastId;}
export const Select: FC<SelectProps> = ({ name, values, placeholder, className, classNames, style, styles, selectedValue, selectedValues, isSearchable = false, onChange, isMultiple }: SelectProps) => {
    const searchInputR = React.createRef<HTMLInputElement>();
    const selectValueR = React.createRef<HTMLInputElement>();
    const dropDownListRef = React.createRef<HTMLDivElement>();
    const dropDownIconRef  =React.createRef<HTMLSpanElement>();
    const selectAreaRef = React.createRef<HTMLDivElement>();
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
            dropDownListRef.current?.classList.add('show')
        } else {
            dropDownListRef.current?.classList.remove('show')
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
        searchInputR.current?.setAttribute('value', value.name)
        selectValueR.current?.setAttribute('value', value.id)
    
        if (onChange) { onChange(value) }
        toggleDropdownShow()
    }
    if (typeof window !== 'undefined') {
        document.addEventListener('click', function (event) {
            if (searchInputR && dropDownIconRef && selectAreaRef && event.target) {
                if (!searchInputR.current?.contains(event.target as Node) && !dropDownIconRef.current?.contains(event.target as Node) && !selectAreaRef.current?.contains(event.target as Node)) {
                    dropdownShow = false
                    dropDownListRef.current?.classList.remove('show')
                }
            }
        });
    }
    return (
        <React.Fragment>
            <div className={clsN.getName()} ref={selectAreaRef} style={mainDivStyle.getStyle()}>
                {isMultiple && multiple?.length ?
                    <div className={"Customized-UI-Selected-Item-Container"} style={multipleItemContainerStyle?.getStyle()}>
                        {multiple?.map((val, index) => {
                            return <label className={"Customized-UI-Selected-Item"} key={index} style={multipleItemStyle?.getStyle()}>{val.name} <Icon name="close" onClick={()=>{setMultipleValues(val)}} size={18} style={multipleSelectedItemCloseStyle.getStyle()}/></label>
                        })}
                    </div>
                    : null}
                <input ref={selectValueR} type="hidden" value={selectedValue?.id} name={name ?? "select-value"} />
                <div className={clsSearchInputDiv.getName()}>
                    <input type="text" placeholder={placeholder ?? ""} ref={searchInputR} className={clsSearchInput.getName()} readOnly={!isSearchable} value={selectedValue?.name} style={searchInputStyle.getStyle()} />
                    <Icon id={dropDownIconRef.current?.id} name='expand_more' className={clsDropdownButton.getName()} onClick={toggleDropdownShow} style={dropdownIconStyle.getStyle()} />
                </div>
                <div ref={dropDownListRef} className={clsDropdownList.getName()} style={dropDownListDivStyle.getStyle()}>
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