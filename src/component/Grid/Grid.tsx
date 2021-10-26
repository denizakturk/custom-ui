import React, { FC } from 'react'
import './Grid.css';
import { GridContainerProps, GridItemProps } from './Grid.types'

export const GridContainer: FC<GridContainerProps> = ({ children }: { children: any }) => {
    return (
        <div className="Custom Custom-ui Grid Container">
            {children}
        </div>
    )
}

export const GridItem: FC<GridItemProps> = ({ children }: { children: any }) => {
    return (
        <div className="Item">
            {children}
        </div>
    )
}