import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem from './LeaderboardItem';
import { userProp } from '../utils/propsHelper';

function LeaderboardList({ leaderboards }) {
  return (
    <div>
      <div className="flex justify-between text-lg">
        <p>Pengguna</p>
        <p>Skor</p>
      </div>
      {leaderboards.map((leaderboard) => (
        <LeaderboardItem
          key={leaderboard.user.id}
          avatar={leaderboard.user.avatar}
          name={leaderboard.user.name}
          score={leaderboard.score}
        />
      ))}
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape(userProp).isRequired,
      score: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default LeaderboardList;
