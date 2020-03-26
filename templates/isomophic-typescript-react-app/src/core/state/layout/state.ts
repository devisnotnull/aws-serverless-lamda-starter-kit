export interface ILayoutState {
    breadcrumb: string[]
    modal : {
        isVisible: boolean
    }
}

export const initialState: ILayoutState = {
    breadcrumb: [],
    modal: {
        isVisible: false,
    },
}
