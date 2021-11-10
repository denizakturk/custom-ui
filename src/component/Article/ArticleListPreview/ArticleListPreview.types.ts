export interface ArticleListPreviewProps {
    article: Article
    articleOption?: ArticleOption
    style?: any
}

export interface Article {
    image?: string
    imageAlt?: string
    imageTitle?: string
    title?: string
    description?: string
    link?: string
}

export interface ArticleOption {
    image?: ArticleOptionImage
}

export interface ArticleOptionImage {
    maxHeight?: string
    isFluid?: boolean
    isRounded?: boolean
}