import React from 'react';
import parse from 'html-react-parser';
import { useDispatch } from 'react-redux';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { userProp } from '../utils/propsHelper';
import postedAt from '../utils';
import {
  asyncToggleDownVoteComment,
  asyncToggleUpVoteComment,
} from '../states/threadDetail/action';

function CommentItem({
  id,
  owner,
  createdAt,
  content,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const dispatch = useDispatch();
  const onUpVoteComment = () => {
    if (authUser) dispatch(asyncToggleUpVoteComment(id));
  };
  const onDownVoteComment = () => {
    if (authUser) dispatch(asyncToggleDownVoteComment(id));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img
            src={owner.avatar}
            className="rounded-full"
            alt="User's avatar"
            width={25}
            height={25}
          />
          <p className="font-semibold">{owner.name}</p>
        </div>
        <p>{postedAt(createdAt)}</p>
      </div>
      <p>{parse(content)}</p>
      <div className="flex gap-3">
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={onUpVoteComment}
        >
          <AiOutlineLike size={18} />
          {upVotesBy.length}
        </button>
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={onDownVoteComment}
        >
          <AiOutlineDislike size={18} />
          {downVotesBy.length}
        </button>
      </div>
      <hr />
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape(userProp).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.shape(userProp).isRequired,
};

export default CommentItem;
