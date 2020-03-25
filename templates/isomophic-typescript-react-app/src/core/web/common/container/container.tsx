import React from 'react'

import * as styles from '../../style/common.css'

export const Container : React.FC<any> = ({ children }) => (
    <div className={styles.Container}>
        {...children}
    </div>
)