import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function LeaderboardPage() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-slate-700 text-2xl font-semibold">
        Klasemen Pengguna Aktif
      </h1>
      <LeaderboardList leaderboards={leaderboards} />
    </section>
  );
}

export default LeaderboardPage;
