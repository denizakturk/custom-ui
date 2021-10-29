import React, { FC } from 'react'
import './Container.css'
import { ContainerProps } from './Container.types'
export const Container: FC<ContainerProps> = ({ children }: { children?: any }) => {
    return (
        <div className="Customized-UI Container">
            {children}
        </div>
    )
}