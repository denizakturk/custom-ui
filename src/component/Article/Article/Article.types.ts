import { GridItemColSize } from "../../Container/Grid/Grid.types";
import { ArticleListPreviewProps } from "../ArticleListPreview/ArticleListPreview.types";

export interface ArticleProps {
    className?: string
    classNames?: string
    style?: any
    article?: ArticleParam
    option?: ArticleOption
    articleListPreviews?: ArticleListPreviewProps[]
    articleListPreviewsOption?: ArticleListPreviewOptionProps
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