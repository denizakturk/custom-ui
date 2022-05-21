import { StylesProps } from "../../../types.types"

export interface SelectProps extends StylesProps {
    name?: string
    placeholder?: string
    selectedValue?: SelectValueProps
    values: SelectValueProps[]
    isSearchable?: boolean
    onChange?: (selectedValue: any) => any
}

export interface SelectValueProps {
    id: string
    name: string
}