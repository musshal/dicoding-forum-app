import React from 'react';
import LeaderboardItem from './LeaderboardItem';

function LeaderboardList() {
  return (
    <div>
      <div className="flex justify-between text-lg">
        <p>Pengguna</p>
        <p>Skor</p>
      </div>
      <LeaderboardItem />
      <LeaderboardItem />
      <LeaderboardItem />
    </div>
  );
}

export default LeaderboardList;
