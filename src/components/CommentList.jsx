import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { commentProp } from '../utils/propsHelper';

function CommentList({ comments }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">
        Komentar
        {' '}
        {`(${comments.length})`}
      </h2>
      <div className="flex flex-col gap-5">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            owner={comment.owner}
            createdAt={comment.createdAt}
            content={comment.content}
            upVotesBy={comment.upVotesBy}
            downVotesBy={comment.downVotesBy}
          />
        ))}
      </div>
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentProp)).isRequired,
};

export default CommentList;
