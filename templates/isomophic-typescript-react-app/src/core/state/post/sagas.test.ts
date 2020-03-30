import { testSaga, expectSaga } from 'redux-saga-test-plan';

import {
    fetchAllPostsRequest,
    fetchByIdPostsRequest,
    fetchAllPostsSucess,
    fetchByIdPostsSuccess,
} from './actions';
import { fetchAllSaga, fetchById, fetchAllStart, fetchByIdStart } from './sagas';
import { fetch, IPayload } from '../utils';
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

describe('post saga: fetchAll', () => {
    it('saga: fetchAllSaga with no params', () => {
        testSaga(fetchAllSaga)
            //
            .next()
            //
            .put(fetchAllPostsRequest())
            //
            .next()
            //
            .isDone();
    });

    it('saga: fetchAllSaga with correct page and limit params', () => {
        testSaga(fetchAllSaga, 1, 2)
            //
            .next()
            //
            .put(fetchAllPostsRequest(1, 2))
            //
            .next()
            //
            .isDone();
    });

    it('saga: snapshot: fetchAllSaga with no page and limit params', async () => {
        const payload = (await expectSaga(fetchAllSaga, 1, 2).run()).toJSON();
        expect(payload).toMatchSnapshot();
    });
});

describe('post saga: fetchById', () => {
    it('saga: fetchById with correct input param', () => {
        testSaga(fetchById, 1)
            //
            .next()
            //
            .put(fetchByIdPostsRequest(1))
            //
            .next()
            //
            .isDone();
    });

    it('saga: snapshot: fetchById with param', async () => {
        const payload = (await expectSaga(fetchById, 1).run()).toJSON();
        expect(payload).toMatchSnapshot();
    });
});
