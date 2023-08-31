import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from '../components/CategoryList';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const categories = Array.from(
    new Set(threads.map((thread) => thread.category)),
  );

  return (
    <section>
      <h2 className="mb-2">Kategori populer</h2>
      <CategoryList categories={categories} />
      <h2 className="my-7 text-2xl font-semibold tracking-normal">
        Diskusi Tersedia
      </h2>
      <ThreadList threads={threadsList} />
    </section>
  );
}

export default HomePage;
