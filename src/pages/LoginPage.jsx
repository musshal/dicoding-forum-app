import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    if (email === '' || password === '') {
      return;
    }

    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <section>
      <h1 className="text-slate-700 text-2xl font-semibold mb-5">Login</h1>
      <LoginInput login={onLogin} />
      <p className="text-slate-700 text-md mt-4">
        Belum punya akun?
        {' '}
        <Link
          to="/register"
          className="underline"
        >
          Daftar di sini.
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;
