import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Relationship } from '@core/web/components/relationships/relationships'
import { Spinner } from '@core/web/common/spinner/spinner'
import { RelationshipForm } from '@core/web/components/form/relationship/relationship'

import { IProductComponentProps } from './todoById.props'
import { mapDispatchToProps, mapStateToProps } from './todoById.state'

import * as styles from '../../style/common.css'
import * as productStyles from './optionGroupsById.css'

export class OptionGroupsByIdView extends Component<IProductComponentProps, {}> {
    componentDidMount() {
        const {
            onFetchByIdAction,
            onFetchAllChildRelationshipsAction,
            onFetchAllParentRelationshipsAction,
            match,
        } = this.props
        onFetchByIdAction(match?.params.id)
        onFetchAllChildRelationshipsAction(match?.params.id)
        onFetchAllParentRelationshipsAction(match?.params.id)
    }

    render() {
        const {
            product,
            loading,
            childRelationships,
            parentRelationships,
            onDeleteRelationshipItemAction,
            onCreateRelationshipItem,
        } = this.props

        if (!product) return <Fragment>None</Fragment>

        return (
            <div className={styles.Container}>
                <div className={productStyles.Content}>
                    {loading && <Spinner />}
                    <aside className={productStyles.Description}>
                        {product && (
                            <div>
                                <h1>{product.name}</h1>
                                <div>{product.uuid}</div>
                            </div>
                        )}

                        <Relationship
                            parentRelationships={parentRelationships}
                            childRelationships={childRelationships}
                            onDeleteRelationshipItemAction={onDeleteRelationshipItemAction}
                        />
                    </aside>

                    <aside className={productStyles.Breakdown}>
                        <div>
                            <h2>Add new option</h2>
                            <div>
                                <RelationshipForm
                                    createAction={onCreateRelationshipItem}
                                    parentUUID={product.uuid}
                                    relationshipType={'option-group-option'}
                                    parentType={'product'}
                                    weight={0}
                                    brand={'global'}
                                    locale={'global'}
                                />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionGroupsByIdView)
