import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from '../components/CategoryList';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    // users = [],
    // authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  return (
    <section>
      <h2 className="mb-2">Kategori populer</h2>
      <CategoryList />
      <h2 className="my-7 text-2xl font-semibold tracking-normal">
        Diskusi Tersedia
      </h2>
      <ThreadList threads={threads} />
    </section>
  );
}

export default HomePage;
