import React, { FC } from 'react'
import { HProps } from "./H.types"

export const H: FC<HProps> = ({ type, text, children }: { type?: string, text?: string, children?: any }) => {
    return (
        <React.Fragment>
            {getHeaderTitleType(type, text)}
        </React.Fragment>
    )
}

function getHeaderTitleType(type?: string, text?: string, children?: any) {
    if (!type) {
        type = 'h1'
    }
    switch (type) {
        case 'h1':
            return (<h1>{text ? text : children}</h1 >)
            break;
        case 'h2':
            return (<h2>{text ? text : children}</h2 >)
            break;
        case 'h3':
            return (<h3>{text ? text : children}</h3 >)
            break
        case 'h4':
            return (<h4>{text ? text : children}</h4 >)
            break
        case 'h5':
            return (<h5>{text ? text : children}</h5 >)
            break
        case 'h6':
            return (<h6>{text ? text : children}</h6 >)
            break
    }
}