import {
    fetchOptionGroupsByIdQuery,
    fetchOptionGroupsQuery,
    createOptionGroup,
    deleteOptionGroup,
} from './query'

export enum OptionGroupActionTypes {
    CREATE_OPTION_GROUP = '@optionGroup/CREATE_OPTION_GROUP',
    DELETE_OPTION_GROUP = '@optionGroup/DELETE_OPTION_GROUP',
    FETCH_ALL_START = '@optionGroup/FETCH_ALL_START',
    FETCH_BY_ID_START = '@optionGroup/FETCH_BY_ID_START',
}

export const fetchAllOptionGroupsRequest = () => {
    return {
        type: OptionGroupActionTypes.FETCH_ALL_START,
        request: {
            query: fetchOptionGroupsQuery,
        },
    }
}

export const fetchByIdOptionGroupsRequest = (id: number) => {
    return {
        type: OptionGroupActionTypes.FETCH_BY_ID_START,
        request: {
            query: fetchOptionGroupsByIdQuery,
            variables: { id },
        },
    }
}

export const createOptionGroupsRequest = (optionGroupInput: object) => {
    return {
        type: OptionGroupActionTypes.CREATE_OPTION_GROUP,
        request: {
            query: createOptionGroup,
            variables: {
                optionGroupInput,
            },
        },
    }
}

export const deleteOptionGroupRequest = (optionGroupId: string) => {
    return {
        type: OptionGroupActionTypes.DELETE_OPTION_GROUP,
        request: {
            query: deleteOptionGroup,
            variables: {
                id: optionGroupId,
            },
        },
    }
}
