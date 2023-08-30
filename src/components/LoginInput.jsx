import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col w-full gap-3">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        className="border-2 border-gray-400 rounded-md p-1"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        className="border-2 border-gray-400 rounded-md p-1"
      />
      <button
        type="button"
        onClick={() => login({ email, password })}
        className="bg-slate-700 p-1 rounded-md text-white"
      >
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
