import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  return (
    <section className="pt-24 p-10">
      <h1 className="text-slate-700 text-3xl font-semibold mb-5">Login</h1>
      <LoginInput />
      <p className="text-slate-700 text-md mt-4">
        Belum punya akun?
        {' '}
        <Link
          to="/"
          className="underline"
        >
          Daftar di sini.
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;
