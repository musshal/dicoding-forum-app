import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  return (
    <section>
      <h1 className="text-slate-700 text-2xl font-semibold mb-5">Register</h1>
      <RegisterInput />
      <p className="text-slate-700 text-md mt-4">
        Sudah punya akun?
        {' '}
        <Link
          to="/login"
          className="underline"
        >
          Masuk di sini.
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
