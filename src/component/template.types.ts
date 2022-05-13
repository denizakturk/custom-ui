
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
    select?: TemplateSideMenuProps | undefined
    form?: TemplateFormProps | undefined
    button?: TemplateButtonProps | undefined
    input?: TemplateInputProps | undefined
    textArea?: TemplateTextAreaProps | undefined
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

export interface TemplateSelectProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateFormProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateButtonProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateInputProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateTextAreaProps {
    backgroundColor?: string | undefined
    color?: string | undefined
    fontSize?: string | undefined
    fontWeight?: string | undefined
    fontFamily?: string | undefined
}

export interface TemplateProps {
    generalProps?: GeneralProps
    componentProps?: TemplateStylesProps | undefined
}