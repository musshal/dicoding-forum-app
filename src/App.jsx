import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import DetailPage from './pages/DetailPage';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <div className="bg-gray-100">
        <Loading />
        <Header className />
        <main className="bg-white m-auto min-h-screen max-w-4xl py-24 p-10">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/threads"
              element={<HomePage />}
            />
            <Route
              path="/threads/:id"
              element={<DetailPage />}
            />
            <Route
              path="/leaderboards"
              element={<LeaderboardPage />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/register"
              element={<RegisterPage />}
            />
          </Routes>
        </main>
        <Footer
          authUser={authUser}
          logout={onLogout}
        />
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <Loading />
      <Header className />
      <main className="bg-white m-auto min-h-screen max-w-4xl py-24 p-10">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/threads"
            element={<HomePage />}
          />
          <Route
            path="/threads/:id"
            element={<DetailPage />}
          />
          <Route
            path="/leaderboards"
            element={<LeaderboardPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Routes>
      </main>
      <Footer
        authUser={authUser}
        logout={onLogout}
      />
    </div>
  );
}

export default App;
