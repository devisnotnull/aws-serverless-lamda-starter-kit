import { AppConfig } from "@core/models/config";

export interface IAppConfigState {
    config: Partial<AppConfig>
}

export const initialState: IAppConfigState = {
    config: {},
}
