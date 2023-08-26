import React from 'react';
import LeaderboardList from '../components/LeaderboardList';

function LeaderboardPage() {
  return (
    <section>
      <h1 className="text-slate-700 text-2xl font-semibold mb-5">
        Klasemen Pengguna Aktif
      </h1>
      <LeaderboardList />
    </section>
  );
}

export default LeaderboardPage;
