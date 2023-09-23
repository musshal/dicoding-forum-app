import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col w-full gap-3">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={onNameChange}
        className="border-2 border-gray-400 rounded-md p-1"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        className="border-2 border-gray-400 rounded-md p-1"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        className="border-2 border-gray-400 rounded-md p-1"
        required
      />
      <button
        type="button"
        onClick={() => register({ name, email, password })}
        className="bg-slate-700 p-1 rounded-md text-white"
      >
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
