import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import postedAt from '../utils';
import { userProp } from '../utils/propsHelper';
import {
  asyncToggleDownvoteThread,
  asyncToggleUpvoteThread,
} from '../states/threads/action';

function ThreadItem({
  id,
  title,
  body,
  category,
  upVotesBy,
  downVotesBy,
  user,
  createdAt,
}) {
  const dispatch = useDispatch();

  const onUpVoteThread = () => {
    dispatch(asyncToggleUpvoteThread(id));
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownvoteThread(id));
  };

  return (
    <div className="my-5">
      <CategoryItem category={category} />
      <h3 className="my-3 text-xl font-semibold">
        <Link to={`/threads/${id}`}>{title}</Link>
      </h3>
      <div className="line-clamp-4">{parse(body)}</div>
      <div className="flex gap-5 mt-3">
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={onUpVoteThread}
        >
          <AiOutlineLike />
          {upVotesBy.length}
        </button>
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={onDownVoteThread}
        >
          <AiOutlineDislike />
          {downVotesBy.length}
        </button>
        <button type="button">
          <BiShare />
        </button>
        <p>{postedAt(createdAt)}</p>
        <p>
          Dibuat oleh
          {' '}
          <span className="font-semibold">{user.name}</span>
        </p>
      </div>
      <hr className="mt-3" />
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape(userProp),
  createdAt: PropTypes.string.isRequired,
};

ThreadItem.defaultProps = {
  user: {},
};

export default ThreadItem;
