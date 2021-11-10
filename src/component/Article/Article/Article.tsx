import React, { FC } from 'react'
import { ArticleListPreviewOptionProps, ArticleOption, ArticleParam, ArticleProps } from "./Article.types"
import { ClassNames } from '../../ClassNames'
import { Paragraph } from '../Paragraph'
import { TextHeader } from '../TextHeader'
import { Image } from '../Image'
import { ArticleListPreviewProps } from '../ArticleListPreview/ArticleListPreview.types'
import { GridContainer, GridItem } from '../../Container/Grid'
import { ArticleListPreview } from '../ArticleListPreview'
import './Article.css'
import { ContentHelper } from '../../helper'
import { Styles } from '../../Styles'

export const Article: FC<ArticleProps> = ({ article, option, articleListPreviews, style, articleListPreviewsOption }: { article?: ArticleParam, option?: ArticleOption, articleListPreviews?: ArticleListPreviewProps[], articleListPreviewsOption?: ArticleListPreviewOptionProps, style?: any }) => {
    let clsNMainDiv = new ClassNames(["Customized-UI", "Article", "MainContainer"])
    let clsNImageDiv = new ClassNames(["Customized-UI", "Article", "ImageContainer"])
    let clsNContentDiv = new ClassNames(["Customized-UI", "Article", "ContentContainer"])
    let clsNFooterDiv = new ClassNames(["Customized-UI", "Article", "FooterContainer"])
    let styl = new Styles(style)
    let contentHelper = new ContentHelper
    return (
        <div style={styl.getStyle()}>
            <div className={clsNMainDiv.getName()}>
                <div className={clsNImageDiv.getName()}>
                    <Image src={article?.image} alt={article?.imageAlt} title={article?.imageTitle} heightFit={option?.image?.maxHeight ?? ""} fluid={option?.image?.isFluid ?? false} rounded={option?.image?.isRounded ?? false} />
                </div>
                <div className={clsNContentDiv.getName()}>
                    <TextHeader size={"h4"}>{article?.title}</TextHeader>
                    <Paragraph text={article?.explanation} />
                    <Paragraph nl2br={true} text={article?.description} />
                    <Paragraph nl2br={true} text={article?.content} />
                </div>
            </div>
            <div className={clsNFooterDiv.getName()}>
                {articleListPreviews ?
                    <GridContainer style={{ padding: "0" }} fullWidth>
                        {articleListPreviews.map((val, index) => {
                            return (
                                <GridItem colSize={articleListPreviewsOption?.colSize ?? { xs: 6, sm: 4, md: 4, l: 3, xl: 3 }} key={index}>
                                    <ArticleListPreview article={val.article} articleOption={val.articleOption} />
                                </GridItem>
                            )
                        })}
                    </GridContainer>
                    : null}
            </div>
        </div>
    )
}