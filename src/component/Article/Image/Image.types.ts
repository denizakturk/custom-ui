import { StylesProps } from "../../../types.types"

export interface ImageProps extends StylesProps {
    src?: string
    fluid?: boolean
    rounded?: boolean
    heightFit?: string
    alt?: string
    title?: string
}