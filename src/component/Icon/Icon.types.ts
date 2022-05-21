import { StylesProps } from "../../types.types"

export interface IconProps extends StylesProps{
    id?:string
    name: string
    size?: number
    onClick?: any
}