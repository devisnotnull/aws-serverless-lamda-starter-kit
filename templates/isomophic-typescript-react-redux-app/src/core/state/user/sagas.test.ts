import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';

import { fetchAllUsersRequest, fetchAllUsersSucess } from './actions';
import { IUser } from '@core/models/user';
import { fetchAllStart } from './sagas';
import { get } from '../utils';
import { IPayload } from '../types';
import { FetchAllAction } from './types';

describe('post saga: fetchAllStart', () => {
    it('saga: fetchAllStart with no params', async () => {
        const action: FetchAllAction = fetchAllUsersRequest() as FetchAllAction;
        const payload: IPayload<IUser[]> = {
            data: [],
        };
        return expectSaga(fetchAllStart, action)
            .provide([
                [
                    call(get, {
                        path: '/users',
                        verb: 'GET',
                        query: {},
                        body: {},
                    }),
                    payload,
                ],
            ])
            .put(fetchAllUsersSucess(payload.data))
            .run();
    });

    it('saga: snapshot: fetchAllSaga with no page and limit params', async () => {
        const action: FetchAllAction = fetchAllUsersRequest() as FetchAllAction;
        const payload = (await expectSaga(fetchAllStart, action).run()).toJSON();
        expect(payload).toMatchSnapshot();
    });
});
