import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
    hideModal,
    showModal
} from './actions';
import { getModal } from './selectors';
import { IState } from '../state'

export const useModal = () => ({
    modal: useSelector<IState, { isVisible: boolean }>(state => getModal(state), shallowEqual)
})

export const useShowModal = () => {
    const dispatch = useDispatch();
   return useCallback(
        (params = {}) => {
           dispatch(showModal());
        },
        [dispatch]
    );
};

export const useHideModal = () => {
    const dispatch = useDispatch();
    const handleOnClose = useCallback(() => {
       dispatch(hideModal());
    }, [dispatch]);
    return {
        handleOnClose 
    }
};
