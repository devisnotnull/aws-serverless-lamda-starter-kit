import { IConfig } from '@core/models/config';

export interface IAppConfig {
    config: Partial<IConfig>;
}

export const initialState: IAppConfig = {
    config: {},
};
