import { CSSProperties } from "react"

export class Styles {
    styles: CSSProperties = {}
    constructor(styles?: any) {
        this.styles = styles
    }

    add = (style?: CSSProperties) => {
        if (style) {
            this.styles = { ...this.styles, ...style }
        }
    }

    getStyle = (): CSSProperties => {
        return this.styles
    }
}