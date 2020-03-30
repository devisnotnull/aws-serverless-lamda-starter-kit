import React from 'react';
import { connect } from 'react-redux';

import { IHomeComponentProps } from './home.props';

import { mapDispatchToProps, mapStateToProps } from './home.state';

import * as styles from '../../style/common.css';

export const HomeView: React.FC<IHomeComponentProps> = () => (
    <div className={styles.Container}>Homepage</div>
)

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
