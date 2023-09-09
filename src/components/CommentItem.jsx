import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { userProp } from '../utils/propsHelper';
import postedAt from '../utils';

function CommentItem({
  owner,
  createdAt,
  content,
  upVotesBy,
  downVotesBy,
}) {
  return (
    <div>
      <div className="flex justify-between my-3 items-center">
        <div className="flex items-center gap-3">
          <img
            src={owner.avatar}
            className="rounded-full w-10 h-10"
            alt="User's avatar"
          />
          <p className="font-semibold">{owner.name}</p>
        </div>
        <p>{postedAt(createdAt)}</p>
      </div>
      <p>{content}</p>
      <div className="flex gap-3 mt-3">
        <button
          type="button"
          className="flex items-center gap-1"
        >
          <AiOutlineLike />
          {upVotesBy.length}
        </button>
        <button
          type="button"
          className="flex items-center gap-1"
        >
          <AiOutlineDislike />
          {downVotesBy.length}
        </button>
      </div>
      <hr className="mt-3" />
    </div>
  );
}

CommentItem.propTypes = {
  owner: PropTypes.shape(userProp).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CommentItem;
