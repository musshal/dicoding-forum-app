import React from 'react';

function LeaderboardItem() {
  return (
    <div className="flex justify-between my-3 text-2xl items-center">
      <div className="flex items-center gap-5">
        <div className="rounded-full w-11 h-11 bg-blue-500 p-2 justify-center">
          <p>DS</p>
        </div>
        <p>Dimas Saputra</p>
      </div>
      <p>25</p>
    </div>
  );
}

export default LeaderboardItem;
