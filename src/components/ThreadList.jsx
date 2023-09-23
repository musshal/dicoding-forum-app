import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadProp } from '../utils/propsHelper';

function ThreadList({ threads, authUser, onClickCategory }) {
  return (
    <div className="flex flex-col gap-5">
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          id={thread.id}
          title={thread.title}
          body={thread.body}
          category={thread.category}
          upVotesBy={thread.upVotesBy}
          downVotesBy={thread.downVotesBy}
          totalComments={thread.totalComments}
          user={thread.user}
          createdAt={thread.createdAt}
          authUser={authUser}
          onClickCategory={onClickCategory}
        />
      ))}
    </div>
  );
}

const authUserShape = {
  token: PropTypes.string,
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadProp)).isRequired,
  authUser: PropTypes.shape(authUserShape),
  onClickCategory: PropTypes.func,
};

ThreadList.defaultProps = {
  authUser: null,
  onClickCategory: undefined,
};

export default ThreadList;
