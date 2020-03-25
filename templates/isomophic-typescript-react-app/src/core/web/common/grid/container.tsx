import * as React from 'react'

import * as styles from '../../../web/style/grid.css'

type IStateProps = {
    isFlex?: boolean
    isPadded?: boolean
}

export type IButtonProps = IStateProps

export const Container: React.FC<IButtonProps> = ({ children }) => (
    <div className={styles['Grid--container']}>{children}</div>
)

export default Container
