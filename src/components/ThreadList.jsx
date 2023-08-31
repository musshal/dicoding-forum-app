/* eslint-disable react/prop-types */
import React from 'react';
import ThreadItem from './ThreadItem';

function ThreadList({ threads }) {
  return (
    <div>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...thread}
        />
      ))}
    </div>
  );
}

export default ThreadList;
