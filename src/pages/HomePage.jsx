import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosAddCircle } from 'react-icons/io';
import { Link, useSearchParams } from 'react-router-dom';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import CategoryList from '../components/CategoryList';
import ThreadList from '../components/ThreadList';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('category');
  const categories = threads.map((thread) => thread.category);
  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser ? authUser.id : null,
  }));
  const categoriesList = [...new Set(categories)];
  const onClickCategory = (category) => {
    if (params === category) setSearchParams('');
    else setSearchParams({ category });
  };
  const filteredThreads = threadsList.filter((thread) => thread.category.includes(params));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg text-gray-700">Kategori populer</h2>
          <CategoryList
            categories={categoriesList}
            onClickCategory={onClickCategory}
            params={params}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold">Diskusi Tersedia</h2>
          <ThreadList
            threads={params ? filteredThreads : threadsList}
            authUser={authUser}
            onClickCategory={onClickCategory}
          />
        </div>
      </section>
      {authUser ? (
        <Link
          to="/threads/add"
          className="fixed bottom-0 right-0 mb-20 mr-10"
        >
          <IoIosAddCircle size={50} />
        </Link>
      ) : (
        ''
      )}
    </>
  );
}

export default HomePage;
