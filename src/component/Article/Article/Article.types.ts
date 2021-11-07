import { ArticleListPreviewProps } from "../ArticleListPreview/ArticleListPreview.types";

export interface ArticleProps {
    className?: string
    classNames?: string
    style?: any
    article?: ArticleParam
    option?: ArticleOption
    articleListPreviews?: ArticleListPreviewProps[]
}

export interface ArticleParam {
    image?: string
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