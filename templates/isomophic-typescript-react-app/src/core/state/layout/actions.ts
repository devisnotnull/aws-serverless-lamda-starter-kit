import { Action } from 'redux-actions'

export enum LayoutActionTypes {
    TOGGLE_MODAL = '@layout/TOGGLE_MODAL',
    UPDATE_BREADCRUM = '@layout/CREATE_PRODUCT',
    UPDATE_BRAND = '@layout/DELETE_OPTION',
    UPDATE_LOCALE = '@layout/FETCH_ALL_START',
}

export const updateBreadcrumb = (breadcrumb: string[]): Action<string[]> => {
    return {
        type: LayoutActionTypes.UPDATE_BREADCRUM,
        payload: breadcrumb,
    }
}

export const toggleModal = (toggle?: boolean): Action<boolean | undefined> => {
    return {
        type: LayoutActionTypes.TOGGLE_MODAL,
        payload: toggle,
    }
}
