import React, { FC } from 'react'
import {ArticleProps, ArticleTagProps } from "./Article.types"
import { ClassNames } from '../../ClassNames'
import { Paragraph } from '../Paragraph'
import { TextHeader } from '../TextHeader'
import { Image } from '../Image'
import { GridContainer, GridItem } from '../../Container/Grid'
import { ArticleListPreview } from '../ArticleListPreview'
import { Styles } from '../../Styles'
import { Tag } from '../Tag'
import { TemplateManager } from '../../template'

import './Article.css'

export const Article: FC<ArticleProps> = ({ tags, article, option, articleListPreviews, style, articleListPreviewsOption, styles }: ArticleProps) => {
    let clsNMainDiv = new ClassNames(["Customized-UI", "Article", "MainContainer"])
    let clsNImageDiv = new ClassNames(["Customized-UI", "Article", "ImageContainer"])
    let clsNContentDiv = new ClassNames(["Customized-UI", "Article", "ContentContainer"])
    let clsNFooterDiv = new ClassNames(["Customized-UI", "Article", "FooterContainer"])
    let clsNTagDiv = new ClassNames(["Customized-UI", "Article", "TagContainer"])

    let listPreviewGridStyl = new Styles(styles?.listPreviewGridStyle)
    let listPreviewStyl = new Styles({ position: "relative", height: "100%" })
    listPreviewStyl.add(styles?.listPreviewStyle)

    let styl = new Styles(TemplateManager.getArticle())
    styl.add(style)

    return (
        <div style={styl.getStyle()}>
            <div className={clsNMainDiv.getName()}>
                <div className={clsNImageDiv.getName()}>
                    <Image src={article?.image} alt={article?.imageAlt} title={article?.imageTitle} heightFit={option?.image?.maxHeight ?? ""} fluid={option?.image?.isFluid ?? false} rounded={option?.image?.isRounded ?? false} />
                </div>
                {tags ?
                    <div className={clsNTagDiv.getName()}>
                        {tags?.map((val: ArticleTagProps, index) => {
                            return (<Tag name={val.name} link={val.link} key={index} />)
                        })}
                    </div>
                    : null}
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
                                <GridItem style={listPreviewGridStyl.getStyle()} colSize={articleListPreviewsOption?.colSize ?? { xs: 6, sm: 4, md: 4, l: 3, xl: 3 }} key={index}>
                                    <ArticleListPreview article={val.article} articleOption={val.articleOption} style={listPreviewStyl.getStyle()} />
                                </GridItem>
                            )
                        })}
                    </GridContainer>
                    : null}
            </div>
        </div>
    )
}