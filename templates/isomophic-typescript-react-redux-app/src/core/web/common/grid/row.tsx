import * as React from 'react';

import * as styles from '../../style/grid.css';

type IStateProps = {
    children?: any;
};

export type IRowProps = IStateProps;

export const Row: React.FC<IRowProps> = ({ children }) => (
    <div className={styles['Grid--row']}>{children}</div>
);

export default Row;
