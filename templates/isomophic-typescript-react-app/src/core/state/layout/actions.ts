import { Action } from 'redux-actions'

export enum LayoutActionTypes {
    SHOW_MODAL = '@layout/SHOW_MODAL',
    HIDE_MODAL = '@layout/HIDE_MODAL',
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

export const showModal = (): Action<boolean | undefined> => {
    return {
        type: LayoutActionTypes.SHOW_MODAL,
        payload: true,
    }
}

export const hideModal = (): Action<boolean | undefined> => {
    return {
        type: LayoutActionTypes.HIDE_MODAL,
        payload: false,
    }
}
