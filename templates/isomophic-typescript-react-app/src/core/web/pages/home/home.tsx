import React, { Component } from 'react'
import { connect } from 'react-redux'

import { IHomeComponentProps } from './home.props'

import { mapDispatchToProps, mapStateToProps } from './home.state'

import * as styles from '../../style/common.css'

export class HomeView extends Component<IHomeComponentProps, {}> {
    render() {
        return (
            <div className={styles.Container}>
                Homepage
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
