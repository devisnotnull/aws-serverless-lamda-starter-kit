import { testSaga, expectSaga } from 'redux-saga-test-plan';

import { fetchAllPostsRequest } from './actions';
import { CREATE_POST_SUCCESS, DELETE_POST_SUCCESS } from './types';
import { fetchAllSaga, postCreateSucess, postDeleteSucess } from './sagas';

describe('post saga: fetchall', () => {
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

    it('saga: fetchAllSaga with no page and limit params', () => {
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

describe('post saga: post', () => {
    it('saga: postCreateSucess yield', () => {
        testSaga(postCreateSucess)
            //
            .next()
            //
            .takeEvery(CREATE_POST_SUCCESS, fetchAllSaga)
            //
            .next()
            //
            .isDone();
    });

    it('saga: snapshot: fetchAllSaga with no page and limit params', async () => {
        const payload = (await expectSaga(postCreateSucess).run()).toJSON();
        expect(payload).toMatchSnapshot();
    });
});

describe('post saga: delete', () => {
    it('saga: postDeleteSucess yield', () => {
        testSaga(postDeleteSucess)
            //
            .next()
            //
            .takeEvery(DELETE_POST_SUCCESS, fetchAllSaga)
            //
            .next()
            //
            .isDone();
    });

    it('saga: snapshot: postDeleteSucess', () => {
        expectSaga(postDeleteSucess)
            .run()
            .then((result) => {
                expect(result.toJSON()).toMatchSnapshot();
            });
    });

    it('saga: snapshot: fetchAllSaga with no page and limit params', async () => {
        const payload = (await expectSaga(postDeleteSucess).run()).toJSON();
        expect(payload).toMatchSnapshot();
    });
});
