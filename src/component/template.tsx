export interface MainTemplateProps {
    setTheme: (template: TemplateProps) => void
    resetStyles: () => void
}

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
export class sideMenuStyle implements TemplateSideMenuProps {
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

export interface TemplateStylesProps {
    header?: TemplateHeaderProps | undefined
    footer?: TemplateFooterProps | undefined
    textHeader?: TemplateTextHeaderProps | undefined
    slogan?: TemplateSloganProps | undefined
    icon?: TemplateIconProps | undefined
    article?: TemplateArticleProps | undefined
    image?: TemplateImageProps | undefined
    paragraph?: TemplateParagraphProps | undefined
    small?: TemplateSmallProps | undefined
    tag?: TemplateTagProps | undefined
    container?: TemplateContainerProps | undefined
    gridContainer?: TemplateGridContainerProps | undefined
    gridItem?: TemplateGridItemProps | undefined
    logo?: TemplateLogoProps | undefined
    link?: TemplateLinkProps | undefined
    sideMenu?: TemplateSideMenuProps | undefined
}

export interface TemplateHeaderProps {
    //boxShadow?: string | undefined
    backgroundColor?: string | undefined
    color?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateFooterProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateTextHeaderProps {
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateSloganProps {
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateIconProps {
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
}

export interface TemplateArticleProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateImageProps {

}

export interface TemplateParagraphProps {
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateSmallProps {
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateTagProps {
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateContainerProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}


export interface TemplateGridContainerProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateGridItemProps {
    backgroundColor?: string
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateLogoProps {
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateLinkProps {
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateSideMenuProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface GeneralProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    borderColor?: string | undefined
    borderWidth?: string | undefined
    //boxShadow?: string | undefined
    borderBottom?: string | undefined
    borderTop?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateProps {
    generalProps?: GeneralProps
    componentProps?: TemplateStylesProps | undefined
}

export class Template implements MainTemplateProps {
    constructor(template?: TemplateProps) {
        if (template) {
            this.setTheme(template)
        }
    }

    styles: TemplateStylesProps | undefined = {
        header: new HeaderStyle,
        footer: new FooterStyle,
        textHeader: new TextHeaderStyle,
        slogan: new SloganStyle,
        icon: new IconStyle,
        article: new ArticleStyle,
        image: new ImageStyle,
        paragraph: new ParagraphStyle,
        container: new ContainerStyle,
        gridContainer: new GridContainerStyle,
        gridItem: new GridItemStyle,
        link: new LinkStyle,
        logo: new LogoStyle,
        sideMenu: new sideMenuStyle,
        small: new SmallStyle,
        tag: new TagStyle
    }

    setTheme = (template: TemplateProps): void => {

        if (!template?.componentProps?.article && this?.styles?.article) {
            this.styles.article = new ArticleStyle(template.generalProps)
        } else if (this?.styles?.article) {
            this.styles.article = new ArticleStyle(template.componentProps?.article)
        }

        if (!template?.componentProps?.gridItem && this.styles?.gridItem) {
            this.styles.gridItem = new GridItemStyle(template.generalProps)
        } else if (this.styles?.gridItem) {
            this.styles.gridItem = new GridItemStyle(template.componentProps?.gridItem)
        }

        if (!template?.componentProps?.gridContainer && this.styles?.gridContainer) {
            this.styles.gridContainer = new GridContainerStyle(template.generalProps)
        } else if (this.styles?.gridContainer) {
            this.styles.gridContainer = new GridContainerStyle(template.componentProps?.gridContainer)
        }

        if (!template?.componentProps?.container && this.styles?.container) {
            this.styles.container = new ContainerStyle(template.generalProps)
        } else if (this.styles?.container) {
            this.styles.container = new ContainerStyle(template.componentProps?.container)
        }

        if (!template?.componentProps?.header && this.styles?.header) {
            this.styles.header = new HeaderStyle(template.generalProps)
        } else if (this.styles?.header) {
            this.styles.header = new HeaderStyle(template.componentProps?.header)
        }

        if (!template?.componentProps?.footer && this.styles?.footer) {
            this.styles.footer = new FooterStyle(template.generalProps)
        } else if (this.styles?.footer) {
            this.styles.footer = new FooterStyle(template.componentProps?.footer)
        }

        if (!template?.componentProps?.icon && this.styles?.icon) {
            this.styles.icon = new IconStyle(template.generalProps)
        } else if (this.styles?.icon) {
            this.styles.icon = new IconStyle(template.componentProps?.icon)
        }

        if (!template?.componentProps?.link && this.styles?.link) {
            this.styles.link = new LinkStyle(template.generalProps)
        } else if (this.styles?.link) {
            this.styles.link = new LinkStyle(template.componentProps?.link)
        }

        if (!template?.componentProps?.logo && this.styles?.logo) {
            this.styles.logo = new LogoStyle(template.generalProps)
        } else if (this.styles?.logo) {
            this.styles.logo = new LogoStyle(template.componentProps?.logo)
        }

        if (!template?.componentProps?.paragraph && this.styles?.paragraph) {
            this.styles.paragraph = new ParagraphStyle(template.generalProps)
        } else if (this.styles?.paragraph) {
            this.styles.paragraph = new ParagraphStyle(template.componentProps?.paragraph)
        }

        if (!template?.componentProps?.sideMenu && this.styles?.sideMenu) {
            this.styles.sideMenu = new sideMenuStyle(template.generalProps)
        } else if (this.styles?.sideMenu) {
            this.styles.sideMenu = new sideMenuStyle(template.componentProps?.sideMenu)
        }

        if (!template?.componentProps?.slogan && this.styles?.slogan) {
            this.styles.slogan = new SloganStyle(template.generalProps)
        } else if (this.styles?.slogan) {
            this.styles.slogan = new SloganStyle(template.componentProps?.slogan)
        }

        if (!template?.componentProps?.tag && this.styles?.tag) {
            this.styles.tag = new TagStyle(template.generalProps)
        } else if (this.styles?.tag) {
            this.styles.tag = new TagStyle(template.componentProps?.tag)
        }

        if (!template?.componentProps?.textHeader && this.styles?.textHeader) {
            this.styles.textHeader = new TextHeaderStyle(template.generalProps)
        } else if (this.styles?.textHeader) {
            this.styles.textHeader = new TextHeaderStyle(template.componentProps?.textHeader)
        }
    }
    getContainer = () => { return this.styles?.container }
    getGridContainer = () => { return this.styles?.gridContainer }
    getGridItem = () => { return this.styles?.gridItem }
    getArticle = () => { return this.styles?.article }
    getFooter = () => { return this.styles?.footer }
    getHeader = () => { return this.styles?.header }
    getIcon = () => { return this.styles?.icon }
    getImage = () => { return this.styles?.image }
    getLink = () => { return this.styles?.link }
    getLogo = () => { return this.styles?.logo }
    getParagraph = () => { return this.styles?.paragraph }
    getSideMenu = () => { return this.styles?.sideMenu }
    getSlogan = () => { return this.styles?.slogan }
    getSmall = () => { return this.styles?.small }
    getTag = () => { return this.styles?.tag }
    getTextHeader = () => { return this.styles?.textHeader }
    resetStyles = () => { this.styles = undefined }
}

export var LightTemplate: TemplateProps = {
    generalProps: {
        backgroundColor: "#ffffff",
        color: "#000000",
        borderColor: undefined,
        borderBottom: undefined,
        borderTop: undefined,
        fontFamily: undefined
        //boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
    }
}

export var DarkTemplate: TemplateProps = {
    generalProps: {
        backgroundColor: "#000000",
        color: "#ffffff",
        borderColor: "#ffffff",
        borderWidth: "initial",
        borderBottom: undefined,
        borderTop: undefined,
        fontSize: "18px",
        fontWeight: "normal",
        fontFamily: undefined
    }
}

export var TemplateManager = new Template(LightTemplate)