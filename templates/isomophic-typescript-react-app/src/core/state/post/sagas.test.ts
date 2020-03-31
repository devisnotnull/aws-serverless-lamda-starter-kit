import { expectSaga } from 'redux-saga-test-plan';

import {
    fetchAllPostsRequest,
    fetchByIdPostsRequest,
    fetchAllPostsSucess,
    fetchByIdPostsSuccess,
} from './actions';
import { fetchAllStart, fetchByIdStart } from './sagas';
import { fetch } from '../utils';
import { IPayload } from '../types';
import { FetchAllAction, FetchByIdAction } from './types';
import { IPostArrayResponsePayload, IPostSingularResponsePayload } from '@core/models/post';
import { call } from 'redux-saga/effects';

describe('post saga: fetchAllStart', () => {
    it('saga: fetchAllStart with no params', async () => {
        const action: FetchAllAction = fetchAllPostsRequest() as FetchAllAction;
        const payload: IPayload<IPostArrayResponsePayload> = {
            data: {
                posts: {
                    data: [],
                    meta: {},
                },
            },
        };
        return expectSaga(fetchAllStart, action)
            .provide([[call(fetch, action.request.query, action.request.variables), payload]])
            .put(fetchAllPostsSucess(payload.data))
            .run();
    });

    it('saga: snapshot: fetchAllSaga with no page and limit params', async () => {
        const action: FetchAllAction = fetchAllPostsRequest() as FetchAllAction;
        const payload = (await expectSaga(fetchAllStart, action).run()).toJSON();
        expect(payload).toMatchSnapshot();
    });
});

describe('post saga: fetchByIdStart', () => {
    it('saga: fetchByIdStart with id', async () => {
        const action: FetchByIdAction = fetchByIdPostsRequest(1) as FetchByIdAction;
        const payload: IPayload<IPostSingularResponsePayload> = {
            data: {
                post: {
                    id: '',
                    title: '',
                    body: '',
                },
            },
        };
        return expectSaga(fetchByIdStart, action)
            .provide([[call(fetch, action.request.query, action.request.variables), payload]])
            .put(fetchByIdPostsSuccess(payload.data))
            .run();
    });

    it('saga: snapshot: fetchAllSaga with no page and limit params', async () => {
        const action: FetchAllAction = fetchAllPostsRequest() as FetchAllAction;
        const payload = (await expectSaga(fetchAllStart, action).run()).toJSON();
        expect(payload).toMatchSnapshot();
    });
});
