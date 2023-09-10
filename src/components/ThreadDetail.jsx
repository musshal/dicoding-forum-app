import React from 'react';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';
import {
  asyncToggleDownvoteThread,
  asyncToggleUpvoteThread,
} from '../states/threads/action';
import CategoryItem from './CategoryItem';
import postedAt from '../utils';
import { userProp } from '../utils/propsHelper';

function ThreadDetail({
  id,
  title,
  body,
  category,
  upVotesBy,
  downVotesBy,
  user,
  createdAt,
  authUser,
}) {
  const dispatch = useDispatch();
  const onUpVoteThread = () => {
    if (authUser) {
      dispatch(asyncToggleUpvoteThread(id));
    }
  };
  const onDownVoteThread = () => {
    if (authUser) {
      dispatch(asyncToggleDownvoteThread(id));
    }
  };

  return (
    <div className="flex flex-col gap-5 text-gray-800">
      <CategoryItem category={category} />
      <h3 className="text-3xl font-semibold ">{title}</h3>
      <div className="text-lg">{parse(body)}</div>
      <div className="flex gap-3 items-center text-md">
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={onUpVoteThread}
        >
          <AiOutlineLike size={18} />
          {upVotesBy.length}
        </button>
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={onDownVoteThread}
        >
          <AiOutlineDislike size={18} />
          {downVotesBy.length}
        </button>
        <div className="flex items-center gap-1">
          <BiShare size={18} />
          <p>{Math.floor(Math.random() * 10)}</p>
        </div>
        <p>{postedAt(createdAt)}</p>
        <div className="flex gap-1">
          <img
            src={user.avatar}
            className="rounded-full"
            alt="User's avatar"
            width={25}
            height={25}
          />
          <p>
            Dibuat oleh
            {' '}
            <span className="font-semibold">{user.name}</span>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

const authUserShape = {
  token: PropTypes.string,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape(userProp),
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.shape(authUserShape),
};

ThreadDetail.defaultProps = {
  authUser: null,
};

ThreadDetail.defaultProps = {
  user: {},
};

export default ThreadDetail;
