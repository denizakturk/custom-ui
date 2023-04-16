import React, { FC } from 'react'
import { Paragraph } from '../Paragraph'
import { TextHeader } from '../TextHeader'
import { Image } from '../Image'
import { Article, ArticleListPreviewProps, ArticleOption } from './ArticleListPreview.types'
import { ClassNames } from '../../ClassNames'
import './ArticleListPreview.css'
import { Link } from '../../Menu/Link'
import { Styles } from '../../Styles'
import { TemplateManager } from '../../template'
export const ArticleListPreview: FC<ArticleListPreviewProps> = ({ article, articleOption, style }: ArticleListPreviewProps) => {
    let styl = new Styles(TemplateManager.getArticle())
    styl.add(style)
    let clsNMainDiv = new ClassNames(["Customized-UI", "ArticleListPreview", "MainContainer"])
    let clsNImageDiv = new ClassNames(["Customized-UI", "ArticleListPreview", "ImageContainer"])
    let clsNContentDiv = new ClassNames(["Customized-UI", "ArticleListPreview", "ContentContainer"])
    let clsNLinkContainer = new ClassNames(["Customized-UI", "ArticleListPreview", "LinkContainer"])
    return (
        <div className={clsNMainDiv.getName()} style={styl.getStyle()}>
            <div className="Customized-UI ArticleListPreview BodyContainer">
                {article?.image ? <div className={clsNImageDiv.getName()}>
                    {article?.link && articleOption?.image?.link ? 
                    <Link href={article?.link} >
                        <Image src={article.image} alt={article?.imageAlt} title={article?.title} heightFit={articleOption?.image?.maxHeight ?? ""} fluid={articleOption?.image?.isFluid ?? false} rounded={articleOption?.image?.isRounded ?? false} /> 
                    </Link>
                    : <Image src={article.image} alt={article?.imageAlt} title={article?.title} heightFit={articleOption?.image?.maxHeight ?? ""} fluid={articleOption?.image?.isFluid ?? false} rounded={articleOption?.image?.isRounded ?? false} />}
                
                </div> : null}
                {article?.title || article?.description ?
                    <div className={clsNContentDiv.getName()}>
                        {article?.title ? <TextHeader size={"h4"}>{article?.title}</TextHeader> : null}
                        {article?.description ? <Paragraph nl2br={true} text={article?.description} /> : null}
                    </div>
                    : null}
            </div>
            {article?.link && article.iconicLink ?
                <div className={clsNLinkContainer.getName()}>
                    <Link icon="arrow_forward_ios" href={article?.link} iconSize={24} />
                </div>
                : null}
        </div>
    )
}