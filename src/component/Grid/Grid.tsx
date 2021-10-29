import React, { FC } from 'react'
import './Grid.css';
import { GridContainerProps, GridItemColSize, GridItemProps } from './Grid.types'

export const GridContainer: FC<GridContainerProps> = ({ children, fullWidth = false, style, widthLimit }: { children?: any, fullWidth?: boolean, style?: any, widthLimit?: string }) => {
    let styl = {}
    if (!style?.width && fullWidth) {
        styl = { width: "100% important", ...style }
    }
    if (!style?.maxWidth && widthLimit) {
        styl = { maxWidth: widthLimit, ...styl }
    }
    return (
        <div className="Customized-UI Grid Container" style={style}>
            {children}
        </div>
    )
}

export const GridItem: FC<GridItemProps> = ({ children, colSize, col, style }: { children?: any, colSize?: GridItemColSize, style?: any, col?: number }) => {
    let clsColSize: string = ""
    if (typeof colSize != "undefined") {
        clsColSize = " " + Object.keys(colSize).map((key, index) => {
            type StatusKey = keyof typeof colSize;
            let str: StatusKey = key as StatusKey;
            return `${key}-${colSize[str]}`;
        }).join(" ")
    }
    let cl = ""
    if (col) {
        cl = ` col-${col}`
    }
    const clsName = `Customized-UI Grid Item${clsColSize}${cl}`
    return (
        <div className={clsName} style={style}>
            {children}
        </div>
    )
}