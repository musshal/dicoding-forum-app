import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { toast } from 'react-toastify';
import {
  asyncToggleDownVoteThread,
  asyncToggleUpVoteThread,
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
  totalComments,
  user,
  createdAt,
  authUser,
  onClickCategory,
}) {
  const dispatch = useDispatch();
  const onUpVoteThread = () => {
    if (authUser) return dispatch(asyncToggleUpVoteThread(id));
    return toast.info('Please login to up vote');
  };
  const onDownVoteThread = () => {
    if (authUser) return dispatch(asyncToggleDownVoteThread(id));
    return toast.info('Please login to down vote');
  };
  const renderUpVote = () => {
    if (upVotesBy.includes(authUser.id)) return <AiFillLike size={18} />;
    return <AiOutlineLike size={18} />;
  };
  const renderDownVote = () => {
    if (downVotesBy.includes(authUser.id)) return <AiFillDislike size={18} />;
    return <AiOutlineDislike size={18} />;
  };

  return (
    <div className="flex flex-col gap-2">
      <CategoryItem
        category={category}
        onClickCategory={onClickCategory}
      />
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
          {authUser ? renderUpVote() : <AiOutlineLike size={18} />}
          {upVotesBy.length}
        </button>
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={onDownVoteThread}
        >
          {authUser ? renderDownVote() : <AiOutlineDislike size={18} />}
          {downVotesBy.length}
        </button>
        <div className="flex items-center gap-1">
          <AiOutlineComment size={18} />
          <p>{totalComments}</p>
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
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userProp),
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.shape(authUserShape),
  onClickCategory: PropTypes.func,
};

ThreadItem.defaultProps = {
  authUser: null,
  onClickCategory: undefined,
};

ThreadItem.defaultProps = {
  user: {},
};

export default ThreadItem;
