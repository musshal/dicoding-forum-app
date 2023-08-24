import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { asyncPreloadSuccess } from './states/isPreload/action';
// import { asyncUnsetAuthUser } from './states/authUser/action';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadSuccess());
  }, [dispatch]);

  // const onSignOut = () => {
  //   dispatch(asyncUnsetAuthUser());
  // };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <Header className />
        <main className=" bg-white m-auto h-screen max-w-4xl">
          <Routes>
            <Route
              path="/"
              element={<LoginPage />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Loading />
      <Header />
    </>
  );
}

export default App;
