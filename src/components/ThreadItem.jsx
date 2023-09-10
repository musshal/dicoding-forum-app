import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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

function ThreadItem({
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
    <div className="flex flex-col gap-2">
      <CategoryItem category={category} />
      <h3 className="text-xl font-semibold hover:text-blue-700">
        <Link to={`/threads/${id}`}>{title}</Link>
      </h3>
      <div className="line-clamp-4 text-sm">{parse(body)}</div>
      <div className="flex gap-3 items-center text-sm">
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
        <p>
          Dibuat oleh
          {' '}
          <span className="font-semibold">{user.name}</span>
        </p>
      </div>
      <hr />
    </div>
  );
}

const authUserShape = {
  token: PropTypes.string,
};

ThreadItem.propTypes = {
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

ThreadItem.defaultProps = {
  authUser: null,
};

ThreadItem.defaultProps = {
  user: {},
};

export default ThreadItem;
