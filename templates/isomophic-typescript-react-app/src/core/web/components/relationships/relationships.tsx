import React, { Component } from 'react'

import { IRelationshipComponentProps } from './relationship.props'

import * as productStyles from './relationships.css'

export class Relationship extends Component<IRelationshipComponentProps, {}> {
    render() {
        const {
            parentRelationships,
            onDeleteRelationshipItemAction,
        } = this.props

        let parentGroupedResult = {}

        if (parentRelationships) {
            parentGroupedResult =
                parentRelationships &&
                parentRelationships.reduce((r, a) => {
                    r[a.relationshipType] = r[a.relationshipType] || []
                    r[a.relationshipType].push(a)
                    return r
                }, Object.create(null))
        }

        const parentKeys = Object.keys(parentGroupedResult)

        return (
            <div>
                <div>
                    {parentGroupedResult &&
                        parentKeys.map(items => {
                            const payload = parentGroupedResult[items]
                            return (
                                <div>
                                    <h1>{items}</h1>
                                    {payload.map(relation => {
                                        return (
                                            <div className={productStyles['Relation--Container']}>
                                                <div>
                                                    <b>uuid: </b>
                                                    {relation['uuid']}
                                                </div>
                                                <div>
                                                    <b>weight: </b>
                                                    {relation['weight']}
                                                </div>
                                                <div>
                                                    <b>relationshipType: </b>
                                                    {relation['relationshipType']}
                                                </div>
                                                <div>
                                                    <b>childUuid: </b>
                                                    {relation['childUuid']}
                                                </div>
                                                <div>
                                                    <b>partition: </b>
                                                    {relation['partition']}
                                                </div>
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            onDeleteRelationshipItemAction(
                                                                relation['uuid']
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}
