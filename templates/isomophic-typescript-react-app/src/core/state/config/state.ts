import { IAppConfig } from '@core/models/config';

export interface IIAppConfigState {
    config: Partial<IAppConfig>;
}

export const initialState: IIAppConfigState = {
    config: {},
};
