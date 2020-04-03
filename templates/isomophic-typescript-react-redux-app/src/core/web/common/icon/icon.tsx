import React from 'react';
import classnames from 'classnames';

import { IButtonProps } from './icon.props';
import { iconSelector } from './icons';

import style from './icon.css';

export const Icon: React.FC<IButtonProps> = ({ className, name, alt }) => {
    const iconMeta = iconSelector(name);
    return (
        <div className={className}>
            <div
                className={classnames(style.container, {
                    [style.deg90]: iconMeta.rotate === 1,
                    [style.deg180]: iconMeta.rotate === 2,
                    [style.deg270]: iconMeta.rotate === 3,
                })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={iconMeta.viewBox}>
                    <title>{alt}</title>
                    <path d={iconMeta.path} />
                </svg>
            </div>
        </div>
    );
};

export default Icon;
