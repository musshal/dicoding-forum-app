import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadProp } from '../utils/propsHelper';

function ThreadList({ threads }) {
  return (
    <div>
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
        />
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadProp)).isRequired,
};

export default ThreadList;
