import React from 'react'
import { connect } from 'react-redux'

import classnames from 'classnames'

import * as styles from '../../style/common.css'

type StateProps = {}
type ActionProps = {}
type SelectorProps = {}

type DefaultProps = {}

type Props = StateProps & ActionProps & SelectorProps & DefaultProps

export class NotFoundView extends React.Component<Props> {
    render() {
        return (
            <div className={classnames(styles['Align--Center'], styles['Container--Large'])}>
                <h1>Not found view</h1>
            </div>
        )
    }
}

const mapStateToProps = (state: {}) => ({})

export default connect(mapStateToProps, {})(NotFoundView)
