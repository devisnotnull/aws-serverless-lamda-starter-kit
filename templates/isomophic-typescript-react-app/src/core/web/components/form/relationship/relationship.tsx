import * as React from 'react'

import { Field } from '../../../common/form/field'
import { Form } from '../../../common/form/form'

interface IStateProps {
    parentUUID: string
    relationshipType: string
    parentType: string
    weight: number
    brand: string
    locale: string
    createAction: Function
}

export const RelationshipForm: React.FC<IStateProps> = ({
    createAction,
    parentUUID,
    relationshipType,
    parentType,
    weight,
    brand,
    locale,
}) => {
    return (
        <Form action={createAction}>
            <Field
                id="parentUuid"
                label="Product uuid"
                editor="textbox"
                value={parentUUID}
                hidden={true}
            />
            <Field
                id="parentType"
                label="Product Entity Type"
                editor="textbox"
                value={parentType}
                hidden={true}
            />
            <Field id="childUuid" label="Child uuid" editor="textbox" />
            <Field
                id="weight"
                label="Product Weighting"
                editor="textbox"
                type={'number'}
                value={weight}
            />
            <Field
                id="brand"
                label="Product Brand"
                editor="textbox"
                type={'string'}
                value={brand}
                hidden={true}
            />
            <Field
                id="locale"
                label="Product Locale"
                editor="textbox"
                type={'string'}
                value={locale}
                hidden={true}
            />
            <Field
                id="relationshipType"
                label="Product relationship type"
                editor="textbox"
                value={relationshipType}
                hidden={true}
            />
        </Form>
    )
}

export default RelationshipForm
