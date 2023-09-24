import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    if (name === '') return toast.error('Name is not allowed to be empty');
    if (email === '') return toast.error('Email is not allowed to be empty');
    if (password === '') return toast.error('Password is not allowed to be empty');

    dispatch(asyncRegisterUser({ name, email, password }));
    return navigate('/login');
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
