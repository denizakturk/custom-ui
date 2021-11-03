import React, { FC } from 'react'
import { TextHeaderProps } from "./TextHeader.types"
import './TextHeader.css'

export const TextHeader: FC<TextHeaderProps> = ({ size, text, children, style }: { size?: string, text?: string, children?: any, style?:any }) => {
    return (
        <React.Fragment>
            {getHeaderTitleType(size, text, children, style)}
        </React.Fragment>
    )
}

function getHeaderTitleType(size?: string, text?: string, children?: any, style?:any) {
    if (!size) {
        size = 'h1'
    }
    switch (size) {
        case 'h1':
            return (<h1>{text ? text : children}</h1 >)
            break;
        case 'h2':
            return (<h2 className="Customized-UI" style={style}>{text ? text : children}</h2 >)
            break;
        case 'h3':
            return (<h3 className="Customized-UI" style={style}>{text ? text : children}</h3 >)
            break
        case 'h4':
            return (<h4 className="Customized-UI" style={style}>{text ? text : children}</h4 >)
            break
        case 'h5':
            return (<h5 className="Customized-UI" style={style}>{text ? text : children}</h5 >)
            break
        case 'h6':
            return (<h6 className="Customized-UI" style={style}>{text ? text : children}</h6 >)
            break
    }
}