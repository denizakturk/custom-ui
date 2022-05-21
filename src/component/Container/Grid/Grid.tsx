import React, { FC } from 'react'
import './Grid.css';
import './../../hide.css'
import { GridContainerProps, GridItemColSize, GridItemProps } from './Grid.types'
import { ClassNames } from '../../ClassNames';
import { Styles } from '../../Styles';
import { TemplateManager } from '../../template';
export const GridContainer: FC<GridContainerProps> = ({ children, fullWidth = false, style, widthLimit, className, classNames }: GridContainerProps) => {
    let styl = new Styles(TemplateManager.getGridContainer())
    styl.add(style)
    let clsN = new ClassNames(["Customized-UI", "Grid", "Container"])
    clsN.add(className).addMany(classNames)
    if (fullWidth) {
        styl.add({ width: "100% important" })
    }
    if (widthLimit) {
        styl.add({ maxWidth: widthLimit })
    }
    return (
        <div className={clsN.getName()} style={styl.getStyle()}>
            {children}
        </div>
    )
}

export const GridItem: FC<GridItemProps> = ({ children, colSize, col, style, hideOnly, hideAndUp, hideAndDown }: { children?: any, colSize?: GridItemColSize, style?: any, col?: number, hideOnly?: string, hideAndUp?: string, hideAndDown?: string }) => {
    let clsN = new ClassNames(["Customized-UI", "Grid", "Item"])
    let styl = new Styles(TemplateManager.getGridContainer())
    styl.add(style)
    if (hideOnly) {
        clsN.add(`hide-${hideOnly}`)
    }
    if (hideAndUp) {
        clsN.add(`hide-${hideAndUp}-and-up`)
    }
    if (hideAndDown) {
        clsN.add(`hide-${hideAndDown}-and-down`)
    }

    if (typeof colSize != "undefined") {
        Object.keys(colSize).map((key, index) => {
            type StatusKey = keyof typeof colSize;
            let str: StatusKey = key as StatusKey;
            clsN.add(`${key}-${colSize[str]}`)
        })
    }
    if (col) {
        clsN.add(`col-${col}`)
    }
    return (
        <div className={clsN.getName()} style={styl.getStyle()}>
            {children}
        </div>
    )
}