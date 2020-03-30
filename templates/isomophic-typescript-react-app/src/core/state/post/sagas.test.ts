import { testSaga, expectSaga } from 'redux-saga-test-plan';

import { fetchAllPostsRequest } from './actions';
import { fetchAllSaga } from './sagas';

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