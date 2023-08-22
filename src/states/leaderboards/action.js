const { showLoading, hideLoading } = require('react-redux-loading-bar');
const { toast } = require('react-toastify');
const { default: api } = require('../../data/api');

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payloas: {
      leaderboards,
    },
  };
}

function asyncReceiveLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      toast(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveLeaderboardsActionCreator, asyncReceiveLeaderboards };
