import React from 'react';
import CategoryList from '../components/CategoryList';
import ThreadList from '../components/ThreadList';

function HomePage() {
  return (
    <section>
      <h2 className="mb-2">Kategori populer</h2>
      <CategoryList />
      <h2 className="my-7 text-2xl font-semibold tracking-normal">
        Diskusi Tersedia
      </h2>
      <ThreadList />
    </section>
  );
}

export default HomePage;
