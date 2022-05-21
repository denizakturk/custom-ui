import React, { FC } from 'react'
import { Link } from '../../Menu/Link';
import { TagProps } from "./Tag.types";
import './Tag.css'
import { Icon } from '../../Icon';
import { ClassNames } from '../../ClassNames';
import { Styles } from '../../Styles';

export const Tag: FC<TagProps> = ({ className, classNames, style, link, name }: TagProps) => {
    let clsName = new ClassNames(["Tag"])
    clsName.add(className)
    return (
        link ?
            <Link icon="local_offer" iconSize={18} href={link} className={clsName.getName()} classNames={classNames} style={style} >{name}</Link>
            :
            <span className="Customized-UI Tag">
                <Icon name="local_offer" /> {name}
            </span>
    )
}