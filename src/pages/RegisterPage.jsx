import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    if (name === '' || email === '' || password === '') {
      return;
    }

    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };

  return (
    <section>
      <h1 className="text-slate-700 text-2xl font-semibold mb-5">Register</h1>
      <RegisterInput register={onRegister} />
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
