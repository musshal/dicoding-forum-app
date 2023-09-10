import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem from './LeaderboardItem';
import { userProp } from '../utils/propsHelper';

function LeaderboardList({ leaderboards }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between text-xl">
        <p>Pengguna</p>
        <p>Skor</p>
      </div>
      <div className="flex flex-col gap-3">
        {leaderboards.map((leaderboard) => (
          <LeaderboardItem
            key={leaderboard.user.id}
            avatar={leaderboard.user.avatar}
            name={leaderboard.user.name}
            score={leaderboard.score}
          />
        ))}
      </div>
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
