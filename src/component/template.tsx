import { ArticleStyle, ButtonStyle, ContainerStyle, FooterStyle, FormStyle, GridContainerStyle, GridItemStyle, HeaderStyle, IconStyle, ImageStyle, LinkStyle, LogoStyle, ParagraphStyle, SelectStyle, SideMenuStyle, SloganStyle, SmallStyle, TagStyle, TextHeaderStyle } from "./template.classes"
import { TemplateProps, TemplateStylesProps } from "./template.types"

export interface MainTemplateProps {
    setTheme: (template: TemplateProps) => void
    resetStyles: () => void
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
        sideMenu: new SideMenuStyle,
        small: new SmallStyle,
        tag: new TagStyle,
        select: new SelectStyle,
        form: new FormStyle,
        button: new ButtonStyle
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
            this.styles.sideMenu = new SideMenuStyle(template.generalProps)
        } else if (this.styles?.sideMenu) {
            this.styles.sideMenu = new SideMenuStyle(template.componentProps?.sideMenu)
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

        if (!template?.componentProps?.select && this.styles?.select) {
            this.styles.select = new SelectStyle(template.generalProps)
        } else if (this.styles?.select) {
            this.styles.select = new SelectStyle(template.componentProps?.select)
        }

        if (!template?.componentProps?.form && this.styles?.form) {
            this.styles.form = new FormStyle(template.generalProps)
        } else if (this.styles?.form) {
            this.styles.form = new FormStyle(template.componentProps?.form)
        }

        if (!template?.componentProps?.button && this.styles?.button) {
            this.styles.button = new ButtonStyle(template.generalProps)
        } else if (this.styles?.button) {
            this.styles.button = new ButtonStyle(template.componentProps?.button)
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
    getSelect = () => { return this.styles?.select }
    getForm = () => { return this.styles?.form }
    getButton = () => { return this.styles?.form }
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