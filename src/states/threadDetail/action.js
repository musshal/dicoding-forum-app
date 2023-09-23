import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import api from '../../data/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UP_VOTE_THREAD_DETAIL: 'TOGGLE_UP_VOTE_THREAD_DETAIL',
  TOGGLE_DOWN_VOTE_THREAD_DETAIL: 'TOGGLE_DOWN_VOTE_THREAD_DETAIL',
  TOGGLE_NEUTRALIZE_THREAD_DETAIL_VOTE: 'TOGGLE_NEUTRALIZE_THREAD_DETAIL_VOTE',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UP_VOTE_COMMENT: 'TOGGLE_UP_VOTE_COMMENT',
  TOGGLE_DOWN_VOTE_COMMENT: 'TOGGLE_DOWN_VOTE_COMMENT',
  TOGGLE_NEUTRALIZE_COMMENT_VOTE: 'TOGGLE_NEUTRALIZE_COMMENT_VOTE',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleNeutralizeThreadDetailVote(userId) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_THREAD_DETAIL_VOTE,
    payload: {
      userId,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleDownVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleNeutralizeCommentVote(userId, commentId) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_COMMENT_VOTE,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      toast.error('Failed to fetch blog detail');
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.upVoteThread(threadDetail.id);
    } catch (error) {
      toast(error.message);
      dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.downVoteThread(threadDetail.id);
    } catch (error) {
      dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id));
    }
    dispatch(hideLoading());
  };
}

function asyncToggleNeutralizeThreadDetailVote() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleNeutralizeThreadDetailVote(authUser.id));
    try {
      await api.neutralizeThreadVote(threadDetail.id);
    } catch (error) {
      dispatch(toggleNeutralizeThreadDetailVote(authUser.id));
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment(threadid, content) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment(threadid, content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      toast.error('Failed to add new comment');
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpVoteCommentActionCreator(authUser.id, commentId));
    try {
      await api.upVoteComment(threadDetail.id, commentId);
    } catch (error) {
      dispatch(toggleUpVoteCommentActionCreator(authUser.id, commentId));
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleDownVoteCommentActionCreator(authUser.id, commentId));
    try {
      await api.downVoteComment(threadDetail.id, commentId);
    } catch (error) {
      dispatch(toggleDownVoteCommentActionCreator(authUser.id, commentId));
    }
    dispatch(hideLoading());
  };
}

function asyncToggleNeutralizeCommentVote(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleNeutralizeCommentVote(authUser.id, commentId));
    try {
      await api.neutralizeCommentVote(threadDetail.id, commentId);
    } catch (error) {
      dispatch(toggleNeutralizeCommentVote(authUser.id, commentId));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  toggleNeutralizeThreadDetailVote,
  addCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralizeThreadDetailVote,
  asyncAddComment,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
  asyncToggleNeutralizeCommentVote,
};
