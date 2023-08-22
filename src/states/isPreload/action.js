import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadSuccess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const authUser = await api.getOwnProfile();
      dispatch(setIsPreloadActionCreator(authUser));
    } catch (error) {
      dispatch(setIsPreloadActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadSuccess };
