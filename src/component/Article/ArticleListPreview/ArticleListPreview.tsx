import React, { FC } from 'react'
import { Paragraph } from '../Paragraph'
import { TextHeader } from '../TextHeader'
import { Image } from '../Image'
import { Article, ArticleListPreviewProps, ArticleOption } from './ArticleListPreview.types'
import { ClassNames } from '../../ClassNames'
import './ArticleListPreview.css'
import { Link } from '../../Menu/Link'
import { Styles } from '../../Styles'
export const ArticleListPreview: FC<ArticleListPreviewProps> = ({ article, articleOption, style }: { article: Article, articleOption?: ArticleOption, style?: any }) => {
    let styl = new Styles(style)
    let clsNMainDiv = new ClassNames(["Customized-UI", "ArticleListPreview", "MainContainer"])
    let clsNImageDiv = new ClassNames(["Customized-UI", "ArticleListPreview", "ImageContainer"])
    let clsNContentDiv = new ClassNames(["Customized-UI", "ArticleListPreview", "ContentContainer"])
    let clsNLinkContainer = new ClassNames(["Customized-UI", "ArticleListPreview", "LinkContainer"])
    return (
        <div className={clsNMainDiv.getName()} style={styl.getStyle()}>
            <div className="Customized-UI ArticleListPreview BodyContainer">
                <div className={clsNImageDiv.getName()}>
                    <Image src={article.image} alt={article?.imageAlt} title={article?.title} heightFit={articleOption?.image?.maxHeight ?? ""} fluid={articleOption?.image?.isFluid ?? false} rounded={articleOption?.image?.isRounded ?? false} />
                </div>
                <div className={clsNContentDiv.getName()}>
                    <TextHeader size={"h4"}>{article?.title}</TextHeader>
                    <Paragraph nl2br={true} text={article?.description} />
                </div>
            </div>
            {article?.link ?
                <div className={clsNLinkContainer.getName()}>
                    <Link icon="arrow_forward_ios" href={article?.link} iconSize={24} />
                </div>
                : null}
        </div>
    )
}