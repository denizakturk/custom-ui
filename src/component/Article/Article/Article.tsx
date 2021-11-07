import React, { FC } from 'react'
import { ArticleOption, ArticleParam, ArticleProps } from "./Article.types"
import { ClassNames } from '../../ClassNames'
import { Paragraph } from '../Paragraph'
import { TextHeader } from '../TextHeader'
import { Image } from '../Image'
import { ArticleListPreviewProps } from '../ArticleListPreview/ArticleListPreview.types'
import { GridContainer, GridItem } from '../../Container/Grid'
import { ArticleListPreview } from '../ArticleListPreview'
import './Article.css'

export const Article: FC<ArticleProps> = ({ article, option, articleListPreviews }: { article?: ArticleParam, option?: ArticleOption, articleListPreviews?: ArticleListPreviewProps[] }) => {
    let clsNMainDiv = new ClassNames(["Customized-UI", "Article", "MainContainer"])
    let clsNImageDiv = new ClassNames(["Customized-UI", "Article", "ImageContainer"])
    let clsNContentDiv = new ClassNames(["Customized-UI", "Article", "ContentContainer"])
    let clsNFooterDiv = new ClassNames(["Customized-UI", "Article", "FooterContainer"])
    return (
        <div className={clsNMainDiv.getName()}>
            <div className={clsNImageDiv.getName()}>
                <Image src={article?.image} heightFit={option?.image?.maxHeight ?? ""} fluid={option?.image?.isFluid ?? false} rounded={option?.image?.isRounded ?? false} />
            </div>
            <div className={clsNContentDiv.getName()}>
                <TextHeader size={"h4"}>{article?.title}</TextHeader>
                <Paragraph>{article?.explanation}</Paragraph>
                <Paragraph>{article?.description}</Paragraph>
                <Paragraph>{article?.content}</Paragraph>
            </div>
            <div className={clsNFooterDiv.getName()}>
                {articleListPreviews ?
                    <GridContainer style={{ padding: "0" }} fullWidth>
                        {articleListPreviews.map((val, index) => {
                            return (
                                <GridItem colSize={{ xs: 6, sm: 4, md: 4, l: 3, xl: 3 }} key={index}>
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