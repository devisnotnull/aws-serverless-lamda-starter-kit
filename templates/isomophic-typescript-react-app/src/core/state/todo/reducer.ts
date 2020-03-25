import { Reducer, AnyAction } from 'redux'
import { success, error, abort } from 'redux-saga-requests'

import { OptionGroupActionTypes } from './actions'
import { IOptionGroupPayload } from '../../models/optionGroup'
import { ICommonPayload } from '../../models/common'

export interface IOptionGroupState extends ICommonPayload<IOptionGroupPayload> {
    readonly loading: boolean
    readonly errors?: string
}

const initialState: IOptionGroupState = {
    total: 0,
    skip: 0,
    limit: 0,
    data: [],
    errors: undefined,
    loading: false,
}

export const optionGroupReducer: Reducer<IOptionGroupState> = (
    state: IOptionGroupState = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case OptionGroupActionTypes.FETCH_ALL_START: {
            return { ...state, loading: true, errors: undefined }
        }
        case success(OptionGroupActionTypes.FETCH_ALL_START): {
            return {
                ...state,
                loading: false,
                errors: undefined,
                data: action.data.getAllOptionGroups,
            }
        }
        case error(OptionGroupActionTypes.FETCH_ALL_START): {
            return { ...state, loading: false, errors: action.payload }
        }
        case abort(OptionGroupActionTypes.FETCH_ALL_START): {
            return { ...state, loading: false, errors: action.payload }
        }
        case OptionGroupActionTypes.FETCH_BY_ID_START: {
            return { ...state, loading: true, errors: undefined }
        }
        case success(OptionGroupActionTypes.FETCH_BY_ID_START): {
            return {
                ...state,
                loading: false,
                errors: undefined,
                ...action.data,
            }
        }
        case error(OptionGroupActionTypes.FETCH_BY_ID_START): {
            return { ...state, loading: false, errors: action.payload }
        }
        case abort(OptionGroupActionTypes.FETCH_BY_ID_START): {
            return { ...state, loading: false, errors: action.payload }
        }
        default: {
            return state
        }
    }
}

export default optionGroupReducer
