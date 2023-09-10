import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadProp } from '../utils/propsHelper';

function ThreadList({ threads, authUser }) {
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
          user={thread.user}
          createdAt={thread.createdAt}
          authUser={authUser}
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
};

ThreadList.defaultProps = {
  authUser: null,
};

export default ThreadList;
