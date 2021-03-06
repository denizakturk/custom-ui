import { StylesProps } from "../../../types.types";
import { GridItemColSize } from "../../Container/Grid/Grid.types";
import { ArticleListPreviewProps } from "../ArticleListPreview/ArticleListPreview.types";

export interface ArticleProps extends StylesProps {
    styles?: ArticleStyles
    article?: ArticleParam
    option?: ArticleOption
    articleListPreviews?: ArticleListPreviewProps[]
    articleListPreviewsOption?: ArticleListPreviewOptionProps
    tags?: ArticleTagProps[]
}

export interface ArticleTagProps {
    link?: string
    name?: string
    slug?: string
}

export interface ArticleStyles {
    listPreviewStyle?: any
    listPreviewGridStyle?: any
}

export interface ArticleListPreviewOptionProps {
    colSize?: GridItemColSize
}

export interface ArticleParam {
    image?: string
    imageAlt?: string
    imageTitle?: string
    title?: string
    description?: string
    explanation?: string
    content?: string
}

export interface ArticleOption {
    image?: ArticleOptionImage
}

export interface ArticleOptionImage {
    maxHeight?: string
    isFluid?: boolean
    isRounded?: boolean
}