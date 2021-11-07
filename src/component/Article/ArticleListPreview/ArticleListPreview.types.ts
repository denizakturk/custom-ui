export interface ArticleListPreviewProps {
    article: Article
    articleOption: ArticleOption
}

export interface Article {
    image?: string
    title?: string
    description?: string
    content?: string
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