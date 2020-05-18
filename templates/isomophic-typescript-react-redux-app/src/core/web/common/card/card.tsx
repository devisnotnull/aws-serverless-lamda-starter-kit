import React from 'react';
import classnames from 'classnames';

import { IButtonProps } from './card.props';
import * as styles from './card.css';

export const Card: React.FC<IButtonProps> = ({ children, className }) => (
    <div className={classnames(styles.Container, className)}>{children}</div>
);

export default Card;
