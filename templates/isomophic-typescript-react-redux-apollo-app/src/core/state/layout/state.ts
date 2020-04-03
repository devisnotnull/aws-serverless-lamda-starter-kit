export interface ILayoutState {
    modal: {
        isVisible: boolean;
    };
}

export const initialState: ILayoutState = {
    modal: {
        isVisible: false,
    },
};
