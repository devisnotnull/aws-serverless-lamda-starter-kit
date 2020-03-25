import React, { Component } from 'react'

import { RouterLink } from '../../common/link/link'
import { Spinner } from '../../common/spinner/spinner'

import { IProductComponentProps } from './selectableList.props'

import * as styles from '../../style/common.css'
import { ISelectableEntity } from '@core/models/selectableEntity'

export class SelectableList extends Component<IProductComponentProps> {
    
    render() {
        const { selectable, loading } = this.props
        return (
            <div className={styles.Container}>
                {loading && <Spinner />}
                <input placeholder={'Search for entity .....'} />
                {selectable &&
                    selectable.map((payload: ISelectableEntity) => {
                        return (
                            <div>
                                <h1>
                                    <RouterLink to={`/products/${payload.uuid}`}>
                                        {payload.name}
                                    </RouterLink>
                                </h1>
                                <div>{payload.uuid}</div>
                                <input type="checkbox" name="vehicle1" value="Bike" />
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default SelectableList
