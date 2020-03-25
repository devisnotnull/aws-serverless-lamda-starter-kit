import { gql } from 'redux-saga-requests-graphql'

export const createOptionGroup = gql`
    mutation CreateOptionGroup($optionGroupInput: OptionGroupInput!) {
        addOptionGroup(data: $optionGroupInput) {
            id
            uuid
        }
    }
`

export const deleteOptionGroup = gql`
    mutation DeleteOptionGroup($optionGroupId: String!) {
        deleteOptionGroup(data: $optionGroupId)
    }
`

export const fetchOptionGroupsQuery = gql`
    query {
        getAllOptionGroups {
            uuid
            name
        }
    }
`

export const fetchOptionGroupsByIdQuery = gql`
    query($id: Float!) {
        getOptionGroupById(id: $id) {
            uuid
            name
        }
    }
`
