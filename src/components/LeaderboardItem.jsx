import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ avatar, name, score }) {
  return (
    <div className="flex justify-between my-3 text-2xl items-center">
      <div className="flex items-center gap-5">
        <div className="rounded-full w-11 h-11 bg-blue-500 p-2 justify-center">
          <img
            src={avatar}
            alt=""
          />
        </div>
        <p>{name}</p>
      </div>
      <p>{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
