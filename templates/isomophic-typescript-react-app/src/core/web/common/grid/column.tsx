import * as React from 'react'
import classnames from 'classnames'

import * as styles from '../../style/grid.css'

type IStateProps = {
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    isPadded?: boolean
}

export type IColumnProps = IStateProps

export const Column: React.FC<IColumnProps> = ({ children, size }) => (
    <div className={classnames(styles[`Grid--col-${size ?? 12}`])}>{children}</div>
)

export default Column
