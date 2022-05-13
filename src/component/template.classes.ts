import { TemplateArticleProps, TemplateButtonProps, TemplateContainerProps, TemplateFooterProps, TemplateFormProps, TemplateGridContainerProps, TemplateGridItemProps, TemplateHeaderProps, TemplateIconProps, TemplateImageProps, TemplateInputProps, TemplateLinkProps, TemplateLogoProps, TemplateParagraphProps, TemplateSelectProps, TemplateSideMenuProps, TemplateSloganProps, TemplateSmallProps, TemplateTagProps, TemplateTextAreaProps, TemplateTextHeaderProps } from "./template.types"

export class HeaderStyle implements TemplateHeaderProps {
    //boxShadow?: string | undefined = undefined
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateHeaderProps) {
        //this.boxShadow = styles?.boxShadow
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontFamily = styles?.fontFamily
    }
}

export class FooterStyle implements TemplateFooterProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateFooterProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class TextHeaderStyle implements TemplateTextHeaderProps {
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateTextHeaderProps) {
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class SloganStyle implements TemplateSloganProps {
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateSloganProps) {
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class IconStyle implements TemplateIconProps {
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    constructor(styles?: TemplateIconProps) {
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
    }
}

export class ArticleStyle implements TemplateArticleProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateArticleProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class ImageStyle implements TemplateImageProps {
}

export class ParagraphStyle implements TemplateParagraphProps {
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateParagraphProps) {
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class SmallStyle implements TemplateSmallProps {
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateSmallProps) {
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class TagStyle implements TemplateTagProps {
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateTagProps) {
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class ContainerStyle implements TemplateContainerProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateContainerProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class GridItemStyle implements TemplateGridItemProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateGridItemProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class GridContainerStyle implements TemplateGridContainerProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateGridContainerProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class LogoStyle implements TemplateLogoProps {
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateLogoProps) {
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class LinkStyle implements TemplateLinkProps {
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateLinkProps) {
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}
export class SideMenuStyle implements TemplateSideMenuProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateSideMenuProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class SelectStyle implements TemplateSelectProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateSelectProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class FormStyle implements TemplateFormProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateFormProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class ButtonStyle implements TemplateButtonProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateButtonProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class InputStyle implements TemplateInputProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateButtonProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}

export class TextAreaStyle implements TemplateTextAreaProps {
    backgroundColor?: string | undefined = undefined
    color?: string | undefined = undefined
    fontSize?: string | undefined = undefined
    fontWeight?: string | undefined = undefined
    fontFamily?: string | undefined = undefined
    constructor(styles?: TemplateButtonProps) {
        this.backgroundColor = styles?.backgroundColor
        this.color = styles?.color
        this.fontSize = styles?.fontSize
        this.fontWeight = styles?.fontWeight
        this.fontFamily = styles?.fontFamily
    }
}