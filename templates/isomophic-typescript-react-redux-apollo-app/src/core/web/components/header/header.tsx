import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import RouterLink from '@core/web/common/link/link';
import Container from '@core/web/common/container/container';

import { IHomeComponentProps } from './header.props';

import { mapDispatchToProps, mapStateToProps } from './header.state';

import * as headerStyles from './header.css';
import Heading from '@core/web/common/heading/heading';

export const Header: React.FC<IHomeComponentProps> = () => (
    <Container>
        <div className={classnames([headerStyles.Header])}>
            <div>
                <Heading size="medium">
                    <RouterLink to={'/demo'}>Component demo</RouterLink>
                </Heading>
            </div>
            <div>
                <Heading size="medium">
                    <RouterLink to={'/posts'}>GraphQl Posts</RouterLink>
                </Heading>
            </div>
        </div>
    </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
