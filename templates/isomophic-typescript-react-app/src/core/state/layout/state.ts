export interface ILayoutState {
    breadcrumb: string[]
    isModalVisible: boolean
}

export const initialState: ILayoutState = {
    breadcrumb: [],
    isModalVisible: true,
}
