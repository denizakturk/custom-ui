import React, { FC } from 'react'
import { SmallProps } from './Small.types'

export const Small: FC<SmallProps> = ({ children }: { children?: any }) => {
    return (<small>{children}</small>)
}