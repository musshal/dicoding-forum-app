import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ avatar, name, score }) {
  return (
    <div className="flex justify-between my-3 text-2xl items-center">
      <div className="flex justify-center items-center gap-5">
        <img
          src={avatar}
          className="rounded-full w-10 h-10"
          alt="User's avatar"
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
