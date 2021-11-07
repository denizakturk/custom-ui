import React, { FC } from 'react'
import { Paragraph } from '../Paragraph'
import { TextHeader } from '../TextHeader'
import { Image } from '../Image'
import { Article, ArticleListPreviewProps, ArticleOption } from './ArticleListPreview.types'
import { ClassNames } from '../../ClassNames'
import './ArticleListPreview.css'
import { Link } from '../../Menu/Link'
export const ArticleListPreview: FC<ArticleListPreviewProps> = ({ article, articleOption }: { article: Article, articleOption?: ArticleOption }) => {

    let clsNMainDiv = new ClassNames(["Customized-UI", "ArticleListPreview", "MainContainer"])
    let clsNImageDiv = new ClassNames(["Customized-UI", "ArticleListPreview", "ImageContainer"])
    let clsNContentDiv = new ClassNames(["Customized-UI", "ArticleListPreview", "ContentContainer"])
    let clsNLinkContainer = new ClassNames(["Customized-UI", "ArticleListPreview", "LinkContainer"])
    return (
        <div className={clsNMainDiv.getName()}>
            <div className={clsNImageDiv.getName()}>
                <Image src={article.image} heightFit={articleOption?.image?.maxHeight ?? ""} fluid={articleOption?.image?.isFluid ?? false} rounded={articleOption?.image?.isRounded ?? false} />
            </div>
            <div className={clsNContentDiv.getName()}>
                <TextHeader size={"h4"}>{article.title}</TextHeader>
                <Paragraph>{article.description}</Paragraph>
                <Paragraph>{article.content}</Paragraph>
            </div>
            {article?.link ?
                <div className={clsNLinkContainer.getName()}>
                    <Link icon="arrow_forward_ios" href={article?.link} iconSize={24} />
                </div>
                : null}
        </div>
    )
}