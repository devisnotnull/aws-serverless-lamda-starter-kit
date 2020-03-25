import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import RouterLink from '@core/web/common/link/link'

import { IHomeComponentProps } from './header.props'

import { mapDispatchToProps, mapStateToProps } from './header.state'

import * as headerStyles from './header.css'
import Breadcrumb from '@core/web/components/breadcrumb/breadcrumb'

export class Header extends Component<IHomeComponentProps, {}> {
    render() {
        return (
            <div>
                <div className={classnames([headerStyles.Header])}>
                    <div>
                        <h2>
                            <RouterLink to={'/products'}>Products</RouterLink>
                        </h2>
                    </div>
                    <div>
                        <h2>
                            <RouterLink to={'/ranges'}>Ranges</RouterLink>
                        </h2>
                    </div>
                    <div>
                        <h2>
                            <RouterLink to={'/variants'}>Variants</RouterLink>
                        </h2>
                    </div>
                    <div>
                        <h2>
                            <RouterLink to={'/options'}>Options</RouterLink>
                        </h2>
                    </div>
                    <div>
                        <h2>
                            <RouterLink to={'/option-groups'}>Option Groups</RouterLink>
                        </h2>
                    </div>
                    <div>
                        <h2>
                            <RouterLink to={'/relationships'}>Relationships</RouterLink>
                        </h2>
                    </div>
                </div>
                <Breadcrumb />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
