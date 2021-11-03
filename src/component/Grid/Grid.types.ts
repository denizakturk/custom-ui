export interface GridContainerProps {
    children?: any
    fullWidth?: boolean
    style?: any
    widthLimit?: string
}

export interface GridItemProps {
    children?: any
    colSize?: GridItemColSize
    style?: any
    col?: number
    hideOnly?: 'xs' | 'sm' | 'md' | 'l' | 'xl'
    hideAndUp?: 'sm' | 'md' | 'l'
    hideAndDown?: 'sm' | 'md' | 'l'
}

export interface GridItemColSize {
    xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    l?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}