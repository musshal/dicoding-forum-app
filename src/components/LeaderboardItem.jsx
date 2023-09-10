import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ avatar, name, score }) {
  return (
    <div className="flex justify-between text-xl items-center">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          className="rounded-full"
          alt="User's avatar"
          width={50}
          height={50}
        />
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
