import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../data/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UPVOTE_THREAD: 'TOGGLE_UPVOTE_THREAD',
  TOGGLE_DOWNVOTE_THREAD: 'TOGGLE_DOWNVOTE_THREAD',
  TOGGLE_NEUTRALIZE_THREAD_VOTE: 'TOGGLE_NEUTRALIZE_THREAD_VOTE',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleUpvoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownvoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralizeThreadVoteActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_THREAD_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category = '' }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      toast(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpvoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      toggleUpvoteThreadActionCreator({ threadId, userId: authUser.id }),
    );
    try {
      await api.upvoteThread(threadId);
    } catch (error) {
      toast(error.message);
      dispatch(
        toggleUpvoteThreadActionCreator({ threadId, userId: authUser.id }),
      );
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownvoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      toggleDownvoteThreadActionCreator({ threadId, userId: authUser.id }),
    );
    try {
      await api.downvoteThread(threadId);
    } catch (error) {
      toast(error.message);
      dispatch(
        toggleDownvoteThreadActionCreator({ threadId, userId: authUser.id }),
      );
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeThreadVote(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      toggleNeutralizeThreadVoteActionCreator({
        threadId,
        userId: authUser.id,
      }),
    );
    try {
      await api.neutralizeThreadVote(threadId);
    } catch (error) {
      toast(error.message);
      dispatch(
        toggleNeutralizeThreadVoteActionCreator({
          threadId,
          userId: authUser.id,
        }),
      );
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpvoteThreadActionCreator,
  toggleDownvoteThreadActionCreator,
  toggleNeutralizeThreadVoteActionCreator,
  asyncAddThread,
  asyncToggleUpvoteThread,
  asyncToggleDownvoteThread,
  asyncNeutralizeThreadVote,
};
