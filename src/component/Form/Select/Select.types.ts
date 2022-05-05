export interface SelectProps {
    name?:string
    placeholder?: string
    className?: string
    classNames?: string[]
    style?: any
    styles?: any
    selectedValue?: SelectValueProps
    values: SelectValueProps[]
    isSearchable?:boolean
}

export interface SelectValueProps {
    id: string
    name: string
}