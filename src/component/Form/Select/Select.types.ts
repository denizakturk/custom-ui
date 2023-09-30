import { StylesProps } from "../../../types.types"

export interface SelectProps extends StylesProps {
    name?: string
    placeholder?: string
    selectedValue?: SelectValueProps
    selectedValues?: SelectValueProps[]
    values: SelectValueProps[]
    isSearchable?: boolean
    isMultiple?: boolean
    styles?:SelectStylesProps
    onChange?: (selectedValue: any) => any
}

export interface SelectStylesProps {
    MultipleSelectedItem?:any
    MultipleSelectedContainer?:any
    MultipleSelectIcon?:any
}

export interface SelectValueProps {
    id: string
    name: string
}