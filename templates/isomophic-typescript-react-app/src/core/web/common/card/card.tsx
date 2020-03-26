import React from 'react'
import classnames from 'classnames';

import * as styles from './card.css'

export const Card : React.FC<any> = ({ children, className }) => (
    <div className={classnames(styles.Container, className)}>
        {children}
    </div>
)

export default Card;