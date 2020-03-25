import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container } from '@core/web/common/container/container'
import { Spinner } from '@core/web/common/spinner/spinner'

import { IOptionGroupComponentProps } from './todo.props'
import { mapDispatchToProps, mapStateToProps } from './todo.state'

import * as styles from './optionGroups.css'

export class TodoView extends Component<IOptionGroupComponentProps, {}> {
    componentDidMount() {
        const { onFetchAllAction } = this.props
        onFetchAllAction()
    }

    render() {
        const { loading, optionGroups, errors, onCreateRelationship } = this.props

        return (
            <Container>
                <div className={styles.Content}>
                    {loading && <Spinner />}

                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionGroupsView)
