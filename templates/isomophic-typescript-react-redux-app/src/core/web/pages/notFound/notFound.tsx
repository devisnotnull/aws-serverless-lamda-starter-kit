import React from 'react';
import { connect } from 'react-redux';

import classnames from 'classnames';

import { INotFoundComponentProps } from './notFound.props';

import * as styles from '../../style/common.css';

export const NotFoundView: React.FC<INotFoundComponentProps> = () => (
    <div className={classnames(styles['Align--Center'], styles['Container--Large'])}>
        <h1>Not found view</h1>
    </div>
);

const mapStateToProps = (state: {}) => ({});

export default connect(mapStateToProps, {})(NotFoundView);
